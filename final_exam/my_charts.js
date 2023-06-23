import * as echarts from "echarts";
import { getTempDay } from "./service.js";

(async () => {
  const [temp_day,temp_night] = await getTempDay("重庆");
  let chartDom = document.getElementById("main");
  const myChart = echarts.init(chartDom);
  const option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
      show: false,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        type: "line",
        smooth: true,
        data: temp_day,
        label: {
          show: true,
          position: "top",
        },
      },
      {
        type: "line",
        smooth: true,
        data: temp_night,
        label: {
          show: true,
          position: "bottom",
        },
      },
    ],
  };
  myChart.setOption(option);
})();
