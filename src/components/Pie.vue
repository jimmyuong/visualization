<template>
  <div class="frame" ref="frame" @click="splitPixel">
    <div class="ground">
      <h2 :class="{dangerFont:state ==='danger'}">{{ title }}</h2>
      <input type="text" :v-model="positionValue" :placeholder="positionValue" >

      <div v-if="state === 'danger'" class="box danger" v-html="svgs.dangerbox.svg"></div>
      <div v-else class="box danger" v-html="modules.type2.svg"></div>

      <div class="" style="top:4rem; left:10rem;position: absolute; z-index: 300;"><i v-html="svgs.cricle.svg"></i></div>

      <div class="pie" ref="pie" style="width: 100%; height: 300px;"></div>
      <i v-html="svgs.logomark.svg" class="imark"></i>
    </div>
   </div>
</template>

<script>
import {svgs} from '@/svg/svg'
import {modules} from '@/svg/modules'
import * as echarts from 'echarts';

export default {
  name: 'HelloWorld',
  data () {
    return {
      svgs:svgs,
      modules:modules
    }
  },
  props: {
    title:String,
    msg: String,
    positionValue: String,
    visualstyle: String,
    state: String
  },
  mounted(){
    this.splitPixel;
    // this.createChart();
   // this.createPie();
  },
  methods:{
    createPie(){
      const chartDom = this.$refs.pie;
      const myChart = echarts.init(chartDom);
      const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    myChart.setOption(option);
    },
    createChart() {
      const chartDom = this.$refs.chart;
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F'],
          axisLine: {
          lineStyle: {
              color: '#ffffff', // Customize X-axis color here
            },
          },
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:false,
          },
          axisLine: {
            lineStyle: {
                color: '#ffffff', // Customize Y-axis color here
              },
          },
        },
        grid: {
          left: '3%', // Adjust the distance from the left edge of the chart to the grid
          right: '4%', // Adjust the distance from the right edge of the chart to the grid
          bottom: '3%', // Adjust the distance from the bottom edge of the chart to the grid
          containLabel: true, // Ensure that the labels are contained within the chart area
          borderColor: '#cccccc',
        },
        series: [
          {
            name: 'Example Data',
            type: 'bar',
            data: [100, 200, 150, 300, 250, 180],
            itemStyle: {
              color:{
                type: 'linear',
                x:0,
                y:0,
                x2:0,
                y2:1,
                colorStops: [
                  {
                    offset:0,
                    color:'#00B7BD',
                  },
                  {
                    offset:1,
                    color:'#000000',
                  },

                ]
              }
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  computed:{
    splitPixel(){
      const pix = this.positionValue.split(',')
      this.$refs.frame.style.top = pix[0]+"px"
      this.$refs.frame.style.left = pix[1]+"px"
      //console.log(pix)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box{
    position: absolute;
}
h2{
    position:absolute
}
.pie{
  position: absolute;
  top:5rem;
}

.imark{
   position: absolute; bottom:0rem;left:2rem;
  svg{
    height:12px !important;
  }
}
.imark svg{
  height:12px;
}
</style>
