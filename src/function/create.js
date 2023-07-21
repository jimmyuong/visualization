import * as echarts from "echarts";

// 全局调色盘。
const colorArray = [
  "#00B7BD",
  "#007A7E",
  "#00969B",
  "#008A8E",
  "#00A7AC",
  "#006063",
  "#00484A",
  "#002B2D",
  "#00E4EC",
  "#00CED4",
  "#00B3B9",
];

// //折线图堆叠
// function createStackedlinechart(ref, obj, dataArray) {
//     const chartDom = ref;
//     const myChart = echarts.init(chartDom);
//     const option = {

//     };
//     myChart.setOption(option);
//   }

// //指定数据到坐标轴的映射
function createSimpleEncode(ref, obj, dataArray) {
    const chartDom = ref;
    const myChart = echarts.init(chartDom);
    const option = {
        color:colorArray,
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'x',      
        axisLine: {
            lineStyle: {
              color: obj.xcolor, // Customize X-axis color here
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: obj.splitColor, //背景分层线
            },
          },
         },
        yAxis: { 
            type: 'category',     
             axisLine: {
            lineStyle: {
              color: obj.xcolor, // Customize X-axis color here
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: obj.splitColor, //背景分层线
            },
          },
         },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            //color: ['#65B581', '#FFCE34', '#FD665F']
            color: colorArray,
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              //x: 'amount',
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      };
    myChart.setOption(option);
  }

// //折线图堆叠
function createDatasetinObjectArray(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ["product", "2015", "2016", "2017"],
      source: [
        { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
        { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
        { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
      ],
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };
  myChart.setOption(option);
}
//某地区蒸发量和降水量
function createRainfallandEvaporation(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    // title: {
    //   text: 'Rainfall vs Evaporation',
    //   subtext: 'Fake Data'
    // },
    tooltip: {
      trigger: "axis",
    },
    // legend: {
    //   data: ['Rainfall', 'Evaporation']
    // },
    toolbox: {
      show: false,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: obj.xcolor, // Customize X-axis color here
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          lineStyle: {
            color: obj.xcolor, // Customize X-axis color here
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: obj.splitColor, //背景分层线
          },
        },
      },
    ],
    series: [
      {
        name: "Rainfall",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
      {
        name: "Evaporation",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
        markPoint: {
          data: [
            { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
            { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
    ],
  };
  myChart.setOption(option);
}

// //玫瑰图
function createRoseChart(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    series: [
      {
        type: "pie",
        data: [
          {
            value: 100,
            name: "A",
          },
          {
            value: 200,
            name: "B",
          },
          {
            value: 300,
            name: "C",
          },
          {
            value: 400,
            name: "D",
          },
          {
            value: 500,
            name: "E",
          },
        ],
        roseType: "area",
      },
    ],
  };
  myChart.setOption(option);
}

// //折线图堆叠
function createHalfDoughnutChart(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   top: '5%',
    //   left: 'center',
    //   // doesn't perfectly work with our tricks, disable it
    //   selectedMode: false,
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "70%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent * 2 + "%)";
          },
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 580 + 484 + 300,
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
}

//雷达图
function createBasicradarchart(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    // title: {
    //   text: 'Basic Radar Chart'
    // },
    // legend: {
    //   data: ['Allocated Budget', 'Actual Spending']
    // },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "Sales", max: 6500, color: obj.xcolor },
        { name: "Administration", max: 16000, color: obj.xcolor },
        { name: "Information Technology", max: 30000, color: obj.xcolor },
        { name: "Customer Support", max: 38000, color: obj.xcolor },
        { name: "Development", max: 52000, color: obj.xcolor },
        { name: "Marketing", max: 25000, color: obj.xcolor },
      ],
      axisLine: {
        lineStyle: {
          color: obj.xcolor,
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: colorArray[8],
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: colorArray[7],
        },
      },
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
            itemStyle: {
              color: colorArray[1],
            },
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
            itemStyle: {
              color: colorArray[5],
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
}

//折线图区域高亮
function createAreapieces(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
    },
    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: "rgba(0, 0, 180, 0.4)",
        },
        {
          gt: 5,
          lt: 7,
          color: "rgba(0, 0, 180, 0.4)",
        },
      ],
    },
    series: [
      {
        type: "line",
        smooth: 0.6,
        symbol: "none",
        lineStyle: {
          color: obj.xcolor,
          width: 5,
        },
        markLine: {
          symbol: ["none", "none"],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
        },
        areaStyle: {
          color: "#006063",
        },
        itemStyle: {
          // Customize the line color and other styles here
          color: obj.xcolor, // Example line color
        },
        data: [
          ["2019-10-10", 200],
          ["2019-10-11", 560],
          ["2019-10-12", 750],
          ["2019-10-13", 580],
          ["2019-10-14", 250],
          ["2019-10-15", 300],
          ["2019-10-16", 450],
          ["2019-10-17", 300],
          ["2019-10-18", 100],
        ],
      },
    ],
  };
  myChart.setOption(option);
}

//折线图堆叠
function createStackedlinechart(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    // title: {
    //     text: 'Stacked Line'
    //   },
    tooltip: {
      trigger: "axis",
    },
    //   legend: {
    //     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    //   },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    //   toolbox: {
    //     feature: {
    //       saveAsImage: {}
    //     }
    //   },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  myChart.setOption(option);
}

//基础面积图
function createBasicareachart(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: dataArray,
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
    },
    series: [
      {
        data: dataArray,
        type: "line",
        areaStyle: {},
      },
    ],
  };
  myChart.setOption(option);
}

//拆线图
function createChartLine(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    // 全局调色盘。
    color: colorArray,

    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
    },
    series: [
      {
        data: dataArray,
        type: "line",
        animation: {
          // 添加闪烁动画
          duration: 1000, // 动画时长（毫秒）
          easing: "cubicOut", // 缓动函数
          delay: function (dataIndex, params) {
            // 控制每个柱状图的动画延迟，实现闪烁效果
            return params.index * 200; // 根据索引设置延迟时间
          },
          // 缩放动画，从不透明到透明再到不透明
          opacity: 1,
        },
      },
    ],
  };
  myChart.setOption(option);
}

//柱状图
function createChartColumn(ref, obj, dataArray) {
  const chartDom = ref;
  const myChart = echarts.init(chartDom);
  const option = {
    color: colorArray,
    xAxis: {
      type: "category",
      data: dataArray,
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize X-axis color here
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: obj.splitColor, //背景分层线
        },
      },
      axisLine: {
        lineStyle: {
          color: obj.xcolor, // Customize Y-axis color here
        },
      },
    },
    grid: {
      left: "3%", // Adjust the distance from the left edge of the chart to the grid
      right: "4%", // Adjust the distance from the right edge of the chart to the grid
      bottom: "3%", // Adjust the distance from the bottom edge of the chart to the grid
      containLabel: true, // Ensure that the labels are contained within the chart area
      borderColor: "#cccccc",
    },
    series: [
      {
        name: "Example Data",
        type: "bar",
        data: dataArray,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            // colorStops: [
            //   {
            //     offset: 0,
            //     color: "#00B7BD",
            //   },
            //   {
            //     offset: 1,
            //     color: "#000000",
            //   },
            // ],
          },
        },
      },
    ],
  };
  myChart.setOption(option);
}

export {
  createSimpleEncode,
  createDatasetinObjectArray,
  createRainfallandEvaporation,
  createRoseChart,
  createHalfDoughnutChart,
  createBasicradarchart,
  createAreapieces,
  createStackedlinechart,
  createBasicareachart,
  createChartColumn,
  createChartLine,
};
