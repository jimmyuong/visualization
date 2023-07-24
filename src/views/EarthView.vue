<template>
<div>
    <div ref="chartContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>


<script>
import * as echarts from 'echarts';
//import axios from 'axios'; // 或者使用其他HTTP库



export default {
  data() {
    return {
        ROOT_PATH:'http://localhost:8080',
      data: [
        ["Shanghai", 31.22, 24150],
        ["Beijing", 39.93, 21536],
        ["Tokyo", 35.68, 13962],
        ["New York", 40.71, 8175],
        ["Seoul", 37.57, 9904],
        // 其他城市的数据...
      ]
    };
  },
  mounted() {
    const data = this.data
      .filter(dataItem => dataItem[2] > 0)
      .map(dataItem => [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])]);

    const myChart = echarts.init(this.$refs.chartContainer);

    // ECharts配置
   // ECharts 配置
   const option = {
      visualMap: {
        show: false,
        min: 0,
        max: 60,
        inRange: {
          symbolSize: [1.0, 10.0]
        }
      },
      globe: {
        environment: this.ROOT_PATH + '/data-gl/asset/starfield.jpg',
        heightTexture: this.ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
        displacementScale: 0.05,
        displacementQuality: 'high',
        globeOuterRadius: 100,
        baseColor: '#000',
        shading: 'realistic',
        realisticMaterial: {
          roughness: 0.2,
          metalness: 0
        },
        postEffect: {
          enable: true,
          depthOfField: {
            focalRange: 15,
            enable: true,
            focalDistance: 100
          }
        },
        temporalSuperSampling: {
          enable: true
        },
        light: {
          ambient: {
            intensity: 0
          },
          main: {
            intensity: 0.1,
            shadow: false
          },
          ambientCubemap: {
            texture: this.ROOT_PATH + '/data-gl/asset/lake.hdr',
            exposure: 1,
            diffuseIntensity: 0.5,
            specularIntensity: 2
          }
        },
        viewControl: {
          autoRotate: false,
          beta: 180,
          alpha: 20,
          distance: 100
        }
      },
      series: {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(50, 50, 150)',
          opacity: 1
        },
        data: data
      }
    };
    myChart.setOption(option);
  }
};

</script>