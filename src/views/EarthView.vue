<template>
  <div>
    <div ref="chart" style="width: 100%; height: 600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import 'echarts-gl';

export default {
  mounted() {
    setTimeout(() => {
      this.createChart();
    }, 1000); // 延迟 1000 毫秒
  },
  methods: {
    createChart() {
      const chartDom = this.$refs.chart;
      const myChart = echarts.init(chartDom);

      const data = [
        {
          name: 'Argentina',
          value: [-(Math.random() * 160 + 80), (Math.random() * 50 + 20)],
        },
        // Add more data points here
      ];

      const option = {
        visualMap: {
          show: false,
          min: 0,
          max: 1000,
        },
        geo3D: {
          map: 'world',
          shading: 'lambert',
          light: {
            main: {
              intensity: 1.5,
              shadow: true,
              shadowQuality: 'high',
            },
          },
          viewControl: {
            distance: 180,
            autoRotate: true,
          },
        },
        series: [
          {
            name: 'Scatter3D',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbolSize: 5,
            data: data,
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>
