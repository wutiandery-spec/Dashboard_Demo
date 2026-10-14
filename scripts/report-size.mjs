#!/usr/bin/env node
/**
 * 构建产物体积报告
 *
 * 统计 dist 下每个资源的原始体积与 gzip 体积，额外给出「首屏资源」
 * （index.html 直接引用的 js / css）体积，用于记录构建优化前后的差异。
 *
 * 用法：
 *   node scripts/report-size.mjs --out baseline
 *   node scripts/report-size.mjs --out after --compare baseline
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, extname, join, relative } from 'node:path'
import { gzipSync } from 'node:zlib'

const root = process.cwd()
const distDir = join(root, 'dist')
const reportDir = join(root, '.size-reports')

if (!existsSync(distDir)) {
  console.error('未找到 dist 目录，请先执行 npm run build-only')
  process.exit(1)
}

function readArgs(argv) {
  const args = { out: 'after', compare: '' }
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--out') args.out = String(argv[i + 1] ?? 'after')
    if (argv[i] === '--compare') args.compare = String(argv[i + 1] ?? '')
  }
  return args
}

const args = readArgs(process.argv.slice(2))

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return [full]
  })
}

/** 从 index.html 中解析首屏直接引用的资源 */
function collectFirstScreenRefs() {
  const htmlPath = join(distDir, 'index.html')
  if (!existsSync(htmlPath)) return new Set()
  const html = readFileSync(htmlPath, 'utf8')
  const refs = new Set()
  const pattern = /(?:src|href)="[^"]*?\/assets\/([^"?]+)"/g
  let match = pattern.exec(html)
  while (match) {
    refs.add(match[1])
    match = pattern.exec(html)
  }
  return refs
}

const kb = (bytes) => Math.round((bytes / 1024) * 10) / 10
const gzipSize = (file) => gzipSync(readFileSync(file), { level: 9 }).length

const firstScreenRefs = collectFirstScreenRefs()

const files = walk(distDir)
  .filter((file) => extname(file) !== '.json')
  .map((file) => {
    const name = relative(distDir, file).replace(/\\/g, '/')
    return {
      name,
      base: basename(file),
      ext: extname(file).slice(1) || 'other',
      raw: statSync(file).size,
      gzip: name === 'index.html' ? 0 : gzipSize(file),
      firstScreen: firstScreenRefs.has(basename(file)),
    }
  })

const sum = (list, key) => list.reduce((acc, item) => acc + item[key], 0)
const jsFiles = files.filter((file) => file.ext === 'js')
const cssFiles = files.filter((file) => file.ext === 'css')
const firstScreen = files.filter((file) => file.firstScreen)

const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    raw: sum(files, 'raw'),
    gzip: sum(files, 'gzip'),
    jsRaw: sum(jsFiles, 'raw'),
    jsGzip: sum(jsFiles, 'gzip'),
    cssRaw: sum(cssFiles, 'raw'),
    cssGzip: sum(cssFiles, 'gzip'),
    firstScreenRaw: sum(firstScreen, 'raw'),
    firstScreenGzip: sum(firstScreen, 'gzip'),
    firstScreenCount: firstScreen.length,
    fileCount: files.length,
  },
  firstScreen: firstScreen
    .map(({ name, raw, gzip }) => ({ name, rawKB: kb(raw), gzipKB: kb(gzip) }))
    .sort((a, b) => b.gzipKB - a.gzipKB),
  files: files
    .map(({ name, ext, raw, gzip }) => ({ name, ext, rawKB: kb(raw), gzipKB: kb(gzip) }))
    .sort((a, b) => b.gzipKB - a.gzipKB),
}

mkdirSync(reportDir, { recursive: true })
const outPath = join(reportDir, `${args.out}.json`)
writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8')

console.log(`\n=== 构建体积报告（${args.out}）===`)
console.log(
  `文件数 ${report.totals.fileCount} | 原始 ${kb(report.totals.raw)} KB | gzip ${kb(report.totals.gzip)} KB`,
)
console.log(
  `JS gzip ${kb(report.totals.jsGzip)} KB | CSS gzip ${kb(report.totals.cssGzip)} KB`,
)
console.log(
  `首屏资源 ${report.totals.firstScreenCount} 个：原始 ${kb(report.totals.firstScreenRaw)} KB | gzip ${kb(report.totals.firstScreenGzip)} KB`,
)

console.log('\n-- 首屏资源明细 --')
for (const file of report.firstScreen.slice(0, 10)) {
  console.log(`${String(file.gzipKB).padStart(8)} KB gzip  ${file.name}`)
}

console.log('\n-- 体积最大的 10 个资源 --')
for (const file of report.files.slice(0, 10)) {
  console.log(`${String(file.gzipKB).padStart(8)} KB gzip  ${file.name}`)
}

if (args.compare) {
  const comparePath = join(reportDir, `${args.compare}.json`)
  if (existsSync(comparePath)) {
    const before = JSON.parse(readFileSync(comparePath, 'utf8'))
    const delta = (after, key) => {
      const base = kb(before.totals[key])
      const change = Math.round((after - base) * 10) / 10
      const percent = base ? Math.round((change / base) * 1000) / 10 : 0
      return `${base} KB → ${after} KB（${change >= 0 ? '+' : ''}${change} KB，${percent}%）`
    }
    console.log(`\n=== 对比 ${args.compare} ===`)
    console.log(`总 gzip：${delta(kb(report.totals.gzip), 'gzip')}`)
    console.log(`JS gzip：${delta(kb(report.totals.jsGzip), 'jsGzip')}`)
    console.log(`首屏 gzip：${delta(kb(report.totals.firstScreenGzip), 'firstScreenGzip')}`)
  } else {
    console.warn(`未找到对比报告 ${comparePath}`)
  }
}

console.log(`\n报告已写入 ${relative(root, outPath).replace(/\\/g, '/')}`)
