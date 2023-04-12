import ReactECharts from "echarts-for-react";
import data from "../data/Wine-Data.json";

function Bar() {
  // Gathering "Alcohol" category on horizontal axis
  const alcoholType: number[] = [];
  data.forEach((value) => {
    // Condition wise storing the distinct alcohol category
    if (!alcoholType.includes(value.Alcohol)) alcoholType.push(value.Alcohol);
  });
  const xAxis = alcoholType;

  // Keeping average of "Malic Acid" for each class on vertical axis
  const yAxis: number[] = [];
  alcoholType.forEach((value) => {
    // Grouping different alcohol type by filtering the data
    const alcoholCategorized = data.filter((item) => item.Alcohol === value);
    let sumMalicAcid = 0;
    alcoholCategorized.forEach((category) => {
      // sum of Malic Acid from grouped alcohol type
      sumMalicAcid += category["Malic Acid"];
    });
    // Taking out the average of Malic Acid
    const avgMalicAcid = sumMalicAcid / alcoholCategorized.length;
    yAxis.push(avgMalicAcid);
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
