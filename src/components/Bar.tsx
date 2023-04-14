import ReactECharts from "echarts-for-react";
import data from "../data/Wine-Data.json";

function Bar() {
  const xAxis: number[] = [];
  const yAxis: number[] = [];

  // Initializing both as Map
  let malicAcidSum = new Map();
  let alcoholFrequency = new Map();
  data.forEach((value) => {
    // Storing distinct alcohol categories as the key for both maps
    let alcoholType = value.Alcohol;
    // Storing sum of malic acid from grouped alcohol type in value of this map
    malicAcidSum.set(alcoholType, (malicAcidSum.get(alcoholType) || 0) + value["Malic Acid"]);
    // Storing count of alcohol type
    alcoholFrequency.set(alcoholType, (alcoholFrequency.get(alcoholType) || 0) + 1);
  });
  
  malicAcidSum.forEach(function(value, key){
    // Pushing different alcohol class on horizontal axis
    xAxis.push(key);
    // Pushing average of malic acid for each alcohol class on vertical axis
    yAxis.push(value/alcoholFrequency.get(key));
  });

  return (
    <ReactECharts
      option={{
        grid: { top: 8 },
        xAxis: {
          type: "category",
          data: xAxis,
          name: "Alcohol",
          nameLocation: "middle",
          nameGap: 25,
        },
        yAxis: {
          type: "value",
          name: "Malic Acid",
          nameLocation: "middle",
          nameGap: 20,
        },
        series: [
          {
            data: yAxis,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      }}
    />
  );
}

export default Bar;
