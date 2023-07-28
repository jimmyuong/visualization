<template>
      <Box :boxsetting="boxparameter"></Box>
      <Box :boxsetting="boxparameter1"></Box>
      <!-- <Pie positionValue="000,1180" title="日本語ってこんな感じ" state="danger"></Pie> -->
      <Box :boxsetting="boxparameter2"></Box>
      <Box :boxsetting="boxparameter3"></Box>
      <Box :boxsetting="boxparameter4"></Box>
      <Box :boxsetting="boxparameter5"></Box>
      <Box :boxsetting="boxparameter6"></Box>
      <Adjustable :boxsetting="boxparameter10"></Adjustable>
      <TableBox :tableboxsetting="tableboxparameter"></TableBox>
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
import Adjustable from '@/components/Adjustable'
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
        positionValue:"800,000",
        width:"100%",
        height:'320px',
        title:"日本語ってこんな感じ", 
        type:"adjustable1", 
        visualstyle:"bar", 
        datas:this.dataArray,
        chartstyle:""
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
    Adjustable,
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