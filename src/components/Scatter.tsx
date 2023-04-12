import ReactECharts from "echarts-for-react";
import data from "../data/Wine-Data.json";

function Scatter() {
  // Storing "Color Intensity" on horizontal axis from given JSON file
  const xAxis = data.map((values) => values["Color intensity"]);

  // Storing "Hue" on vertical axis from given JSON file
  const yAxis = data.map((items) => items.Hue);

  return (
    <ReactECharts
      option={{
        grid: { top: 8 },
        xAxis: {
          type: "category",
          data: xAxis,
          name: "Color Intensity",
          nameLocation: "middle",
          nameGap: 25,
        },
        yAxis: {
          type: "value",
          name: "Hue",
          nameLocation: "middle",
          nameGap: 20,
        },
        series: [
          {
            data: yAxis,
            type: "scatter",
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      }}
    />
  );
}

export default Scatter;
