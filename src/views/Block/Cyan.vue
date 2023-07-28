<template>
      <Box :boxsetting="boxparameter" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter1" :colors="colorArray"></Box>
      <!-- <Pie positionValue="000,118 :colors="colorArray"0" title="日本語ってこんな感じ" state="danger"></Pie> -->
      <Box :boxsetting="boxparameter2" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter3" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter4" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter5" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter6" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter7" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter8" :colors="colorArray"></Box>
      <Box :boxsetting="boxparameter9" :colors="colorArray"></Box>
      <TableBox :tableboxsetting="tableboxparameter" :colors="colorArray"></TableBox>
      <!-- <Pie positionValue="000,1770" title="日本語ってこんな感じ"></Pie>
      <Box positionValue="400,000" title="اللاتينية مثل هذا" type="type1" ></Box>
      <Box positionValue="400,590" title="اللاتينية مثل هذا" type="type1" ></Box>
      <Box positionValue="400,1180" title="繁體是這樣的" type="type1" ></Box>
      <Pie positionValue="400,1770" title="日本語ってこんな感じ"></Pie>
      <Box positionValue="800,000" title="한국어는 이렇다" type="type1" ></Box>
      <Box positionValue="800,590" title="ENGLISH LIKE" type="type2" ></Box>
      <Box positionValue="800,1180" title="ENGLISH LIKE" type="type2" ></Box>
      <Pie positionValue="800,1770" title="日本語ってこんな感じ"></Pie> -->
</template>

<script>
import Box from '@/components/Box.vue'
import TableBox from '@/components/TableBox.vue'
import Pie from '@/components/Pie.vue'
import LesMiserables from '@/components/LesMiserables.vue'
import {svgs} from '@/svg/svg'
import {colorArray} from '@/function/create'

export default {
  name: 'CyanView',
  data () {
    return {
      svgs:svgs,
      dataArray:[],
      pixel:'000,200',
      tableboxparameter:{
        positionValue:"050,1820",
        width:"580px",
        height:'1180px',
      },
      colorArray:["#00B7BD",
  "#007A7E",
  "#00969B",
  "#008A8E",
  "#00A7AC",
  "#006063",
  "#00484A",
  "#002B2D",
  "#00E4EC",
  "#00CED4",
  "#00B3B9",],
      boxparameter:{
        positionValue:"000,000",
        width:"100%",
        height:'360px',
        title:"ENGLISH LIKE", 
        type:"type2", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"line"
      },
      boxparameter1:{
        positionValue:"000,590",
        width:"100%",
        height:'320px',
        title:"中文是这样的", 
        type:"type2", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"column"
      },
      boxparameter3:{
        positionValue:"000,1180",
        width:"100%",
        height:'360px',
        title:"日本語ってこんな感じ", 
        type:"type2", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"Basicareachart"
      },
      boxparameter4:{
        positionValue:"400,000",
        width:"100%",
        height:'300px',
        title:"ENGLISH LIKE", 
        type:"type1", 
        visualstyle:"bar", 
        datas:this.dataArray,
        //chartstyle:"Stackedlinechart"
        chartstyle:"Stackedlinechart"
      },
      boxparameter5:{
        positionValue:"400,590",
        width:"100%",
        height:'340px',
        title:"中文是这样的", 
        type:"type1", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"DatasetinObjectArray"
      },
      boxparameter6:{
        positionValue:"400,1180",
        width:"100%",
        height:'340px',
        title:"日本語ってこんな感じ", 
        type:"type1", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"Areapieces"
      },
      boxparameter7:{
        positionValue:"800,000",
        width:"100%",
        height:'260px',
        title:"日本語ってこんな感じ", 
        type:"type3", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"Basicradarchart"
      },
      boxparameter8:{
        positionValue:"800,590",
        width:"100%",
        height:'280px',
        title:"日本語ってこんな感じ", 
        type:"type3", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"SimpleEncode"
      },
      boxparameter9:{
        positionValue:"800,1180",
        width:"100%",
        height:'320px',
        title:"日本語ってこんな感じ", 
        type:"type3", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"RainfallandEvaporation"
      },
      boxparameter10:{
        positionValue:"800,1180",
        width:"100%",
        height:'320px',
        title:"日本語ってこんな感じ", 
        type:"type4", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:"RainfallandEvaporation"
      },
    }
  },

  mounted() {
    //this.$refs.frame.addEventListener('mousemove', this.handleFrameMousemove);
    this.generateRandomArray()
    this.dataArray

  },

  components: {
    Box,
    TableBox,
    Pie,
    LesMiserables,
  },
  methods:{
    generateRandomArray() {
      const length = 6; // 数组长度，根据你的需求设置
      const minNumber = 100; // 随机数的最小值
      const maxNumber = 500; // 随机数的最大值

      // 生成随机数组
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        this.dataArray.push(randomNumber);
      }
      // 更新Vue实例的数据
      //this.randomArray = array;
      console.log(this.dataArray)
    },
  }
}
</script>

<style>

</style>