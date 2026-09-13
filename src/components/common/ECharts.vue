<template>
    <el-col :span="12">
        <el-card shadow="never">
            <template #header>
                <div class="flex justify-between">
                    <h3>订单展示</h3>
                    <div>
                        <el-check-tag :checked="checked === item.value" @change="onChange(item.value)"
                            v-for="(item, index) in dataList" :key="index" class="ml-2">{{ item.title
                            }}</el-check-tag>
                    </div>
                </div>
            </template>
            <div id="main" style="width:100%;height:300px;"></div>
        </el-card>
    </el-col>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { getStatistics3 } from '@/api/modules/statistics';
echarts.use([GridComponent, BarChart, CanvasRenderer]);
type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

const dataList = [
    { title: '近24小时', value: 'hour' },
    { title: '近一周', value: 'week' },
    { title: '近一月', value: 'month' },
]
const checked = ref('month')
let myChart: echarts.ECharts | null = null
async function getData() {
    myChart?.showLoading();
    const result = await getStatistics3(checked.value)
    const { x, y } = result.data
    const option: EChartsOption = {
        xAxis: { type: 'category', data: x },
        yAxis: { type: 'value' },
        series: [{ data: y, type: 'bar' }]
    }
    myChart?.setOption(option)
    myChart?.hideLoading()
}

onMounted(() => {
    const chartDom = document.getElementById('main')!;
    if (chartDom) {
        myChart = echarts.init(chartDom)
        getData()
        window.addEventListener('resize', () => myChart?.resize());
    }
})

const onChange = (status: string) => {
    if (checked.value !== status) getData()
    checked.value = status
}
</script>