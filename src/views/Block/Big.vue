<template>
    <Box :boxsetting="boxparameter"></Box>
    <Box :boxsetting="boxparameter3"></Box>
    <Box :boxsetting="boxparameter6"></Box>
    <Box :boxsetting="boxparameter7"></Box>
    <Box :boxsetting="boxparameter8"></Box>
    <Box :boxsetting="boxparameter9"></Box>
</template>

<script>
import Box from '@/components/Box.vue'
import TableBox from '@/components/TableBox.vue'
import Pie from '@/components/Pie.vue'
import LesMiserables from '@/components/LesMiserables.vue'
import {svgs} from '@/svg/svg'

export default {
name: 'CyanView',
data () {
  return {
    svgs:svgs,
    dataArray:[],
    pixel:'000,200',
    tableboxparameter:{
      positionValue:"050,1820",
      width:"500px",
      height:'1180px',
    },
    boxparameter:{
      positionValue:"000,000",
      width:"100%",
      height:'360px',
      title:"ENGLISH LIKE", 
      type:"typebig1", 
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