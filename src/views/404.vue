<template>
  <section class="not-found-page">
    <div class="not-found-card">
      <div class="not-found-code">404</div>
      <div class="not-found-content">
        <p class="not-found-eyebrow">页面暂时不可用</p>
        <h1>找不到你要访问的页面</h1>
        <p class="not-found-description">
          页面可能已被移除、地址输入有误，或当前账号没有对应的菜单权限。
        </p>
        <div class="not-found-actions">
          <el-button type="primary" @click="goHome">返回首页</el-button>
          <el-button @click="refreshPage">刷新页面</el-button>
          <el-button text @click="goBack">返回上一页</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => router.push({ name: 'index' })
const goBack = () => router.back()
const refreshPage = () => window.location.reload()
</script>

<style scoped>
.not-found-page {
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: clamp(24px, 8vw, 96px);
  background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #eef2ff 100%);
}

.not-found-card {
  width: min(100%, 760px);
  display: flex;
  align-items: center;
  gap: clamp(28px, 7vw, 80px);
  padding: clamp(28px, 6vw, 64px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 24px 70px rgba(30, 64, 175, 0.12);
}

.not-found-code {
  flex: 0 0 auto;
  color: #2563eb;
  font-size: clamp(72px, 14vw, 150px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.08em;
}

.not-found-content {
  min-width: 0;
}
.not-found-eyebrow {
  margin: 0 0 10px;
  color: #2563eb;
  font-size: 14px;
  font-weight: 700;
}
h1 {
  margin: 0;
  color: #172554;
  font-size: clamp(24px, 4vw, 38px);
  line-height: 1.25;
}
.not-found-description {
  margin: 16px 0 28px;
  color: #64748b;
  line-height: 1.8;
}
.not-found-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 640px) {
  .not-found-card {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
  }
  .not-found-code {
    font-size: 88px;
  }
}
</style>
