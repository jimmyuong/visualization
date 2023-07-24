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

export {flashingAnimation,updateData}