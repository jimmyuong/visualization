<template>
  <div class="frame" ref="frame" @click="splitPixel">
    <div class="ground">
      <h2>{{ title }}</h2>
      <input type="text" :v-model="positionValue" :placeholder="positionValue" >
      <div class="box" v-html="svgs.box.svg"></div>
      <div class="basicRadarChartables" ref="basicRadarChartables" style="width: 100%; margin:auto;height: 260px;"></div>
    </div>
   </div>
</template>

<script>
import {svgs} from '@/svg/svg'
import * as echarts from 'echarts';

export default {
  name: 'HelloWorld',
  data () {
    return {
      svgs:svgs
    }
  },
  props: {
    title:String,
    msg: String,
    positionValue: String,
    visualstyle: String,
  },
  mounted(){
    this.splitPixel;
    //this.createBasicRadarChartables();
  },
  computed:{
    splitPixel(){
      const pix = this.positionValue.split(',')
      this.$refs.frame.style.top = pix[0]+"px"
      this.$refs.frame.style.left = pix[1]+"px"
      console.log(pix)
    }
  },
  methods:{
    createBasicRadarChartables(){
      const chartDom = this.$refs.basicRadarChartables;
      const myChart = echarts.init(chartDom);
      const option = {
  title: {
    //text: 'Basic Radar Chart'
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};
  myChart.setOption(option);
    },
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
.basicRadarChartables{
  position: absolute;
  top:5rem;
}
</style>
