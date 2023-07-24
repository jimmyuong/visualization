<template>
  <div class="frame" ref="frame" @click="splitPixel">
    <div class="ground">
      <h2 style="width:1752px;padding: 8px;">{{ boxsetting.title }}</h2>
      <input type="text" :v-model="boxsetting.positionValue" :placeholder="boxsetting.positionValue">
      <!-- <div v-if="boxsetting.type==='type1'" class="box" v-html="modules.type1.svg"></div>
      <div v-else-if="boxsetting.type==='type2'" class="box" v-html="modules.type2.svg"></div>
      <div v-else-if="boxsetting.type==='type3'" class="box" v-html="modules.type3.svg"></div> -->
      <div class="AdjustableBox" style="width:1752px;height:380px">
        <TableBox :tableboxsetting="tableboxparameter" style="position: absolute;top:0;left:0;z-index: 102;"></TableBox>
        <div class="AdjustableTopLeft "></div>
        <div class="AdjustableTopRight "></div>
        <div class="AdjustableBottomLeft "></div>
        <div class="AdjustableBottomRight "></div>
      </div>
      <div :class="[{ chart: this.boxsetting.type != 'type3' }, { chartadd: this.boxsetting.type == 'type3' }]" ref="chart"
        :style="{ width: boxsetting.width, height: boxsetting.height }"></div>
    </div>
  </div>
</template>

<script>
import { svgs } from '@/svg/svg'
import { modules } from '@/svg/modules'
import TableBox from '@/components/TableBox.vue'

import { createSimpleEncode, createDatasetinObjectArray, createRainfallandEvaporation, createRoseChart, createHalfDoughnutChart, createBasicradarchart, createAreapieces, createStackedlinechart, createChartLine, createChartColumn, createBasicareachart } from "@/function/create"

export default {
  name: 'HelloWorld',
  data() {
    return {
      svgs: svgs,
      modules: modules,
      dataArray: [],
      chartsetting: {
        xcolor: '#006B6F',
        ycolor: '#006B6F',
        splitColor: '#002C2E'//分割线
      },
      tableboxparameter:{
        positionValue:"060,000",
        width:"100%",
        height:'300px',
      },
    }
  },
  components: {
    TableBox
  },
  props: {
    // title:String,
    // msg: String,
    // positionValue: String,
    // visualstyle: String,
    // type:String,
    // datas:Array,
    // chartstyle: String,
    boxsetting: {
      type: Object,
      default: () => ({}), // Provide an empty object as the default value
    },
  },
  mounted() {
    this.splitPixel;
    this.generateRandomArray()
    if (this.boxsetting.chartstyle == 'line') {
      createChartLine(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'column') {
      createChartColumn(this.$refs.chart, this.chartsetting, this.dataArray);
    } else if (this.boxsetting.chartstyle == 'Basicareachart') {
      createBasicareachart(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'Stackedlinechart') {
      createStackedlinechart(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'Areapieces') {
      createAreapieces(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'Basicradarchart') {
      createBasicradarchart(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'HalfDoughnutChart') {
      createHalfDoughnutChart(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'RoseChart') {
      createRoseChart(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == 'RainfallandEvaporation') {
      createRainfallandEvaporation(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == "DatasetinObjectArray") {
      createDatasetinObjectArray(this.$refs.chart, this.chartsetting, this.dataArray)
    } else if (this.boxsetting.chartstyle == "SimpleEncode") {
      createSimpleEncode(this.$refs.chart, this.chartsetting, this.dataArray)
    }
  },
  methods: {
    generateRandomArray() {
      const length = 12; // 数组长度，根据你的需求设置
      const minNumber = 100; // 随机数的最小值
      const maxNumber = 500; // 随机数的最大值

      // 生成随机数组
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        this.dataArray.push(randomNumber);
      }
    },

  },
  computed: {
    splitPixel() {
      const positionValue = this.boxsetting?.positionValue || 'default value';
      const pix = positionValue.split(','); // Split based on comma
      this.$refs.frame.style.top = pix[0] + "px"
      this.$refs.frame.style.left = pix[1] + "px"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.AdjustableBox {
  position: relative;
  border: 1px solid #003b3d;
  z-index: -1;
  box-shadow: inset 0 0 30px #003638;

  .AdjustableTopLeft,
  .AdjustableTopRight {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 101;

    &:after,
    &:before {
      content: '';
      display: block;
      background: #00F7FF;
      position: absolute;
      top: 0;
      animation: flash11 3s infinite;
    }

    &:after {
      width: 24px;
      height: 2px;
    }

    &:before {
      width: 2px;
      height: 24px;
    }
  }

  .AdjustableTopLeft {

    &:after,
    &:before {
      left: 0;
    }
  }

  .AdjustableTopRight {

    &:after,
    &:before {
      right: 0;
    }
  }

  .AdjustableBottomLeft,
  .AdjustableBottomRight {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 101;

    &:after,
    &:before {
      content: '';
      display: block;
      background: #00F7FF;
      position: absolute;
      bottom: 0;
      animation: flash5 3s infinite;
    }

    &:after {
      width: 24px;
      height: 2px;
    }

    &:before {
      width: 2px;
      height: 24px;
    }
  }

  .AdjustableBottomLeft {

    &:after,
    &:before {
      left: 0;
    }
  }

  .AdjustableBottomRight {

    &:after,
    &:before {
      right: 0;
    }
  }

}

.box {
  position: absolute;
}

h2 {
  display: block;
  position: absolute;
}

.chart {
  position: absolute;
  top: 3rem;
}

.chartadd {
  position: absolute;
  top: 4rem;
}</style>
