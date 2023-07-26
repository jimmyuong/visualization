// 自定义闪光动画
function flashingAnimation(myChart) {
    // 闪光效果函数
    function flashAnimation() {
        myChart.dispatchAction({
            type: 'highlight',
            dataIndex: 0 // 闪光的柱状图的索引，这里假设是第一个柱状图
        });
        setTimeout(function () {
            myChart.dispatchAction({
                type: 'downplay',
                dataIndex: 0 // 结束闪光的柱状图的索引
            });
        }, 300);
    }

    // 设置闪光动画
    setInterval(flashAnimation, 500);
}

// 更新数据的函数
function updateData(myChart,dataArray) {
    // 模拟异步获取新数据
    // 在实际应用中，你需要从服务器或其他数据源获取新的数据
    // 这里使用setTimeout来模拟异步请求
    setTimeout(function () {
        var newData = [];
        for (var i = 0; i < dataArray.length; i++) {
          newData.push(Math.floor(Math.random() * 200));
        }
        myChart.setOption({
          series: [
            {
              data: newData,
            },
          ],
        });
        updateData(myChart, dataArray); // Continue updating data
      }, 3000);
    }





    // 随机生成一个名称
function generateRandomName() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let name = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    name += characters.charAt(randomIndex);
  }
  return name;
}

// 原始数据
const source = [
  { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
  { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
  { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
  { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
];

// 根据原始数据生成新的对象
const createDatasetinObjectArrayData = source.map(item => {
  const newItem = { ...item };
  for (let i = 2018; i <= 2022; i++) {
    newItem[i] = Math.floor(Math.random() * 100);
  }
  newItem.product = generateRandomName();
  return newItem;
});



export {flashingAnimation,updateData,createDatasetinObjectArrayData}