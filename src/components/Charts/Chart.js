import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxVal = Math.max(...dataPointValues);
  return (
    <ul className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxVal}
          label={dataPoint.label}
        />
      ))}
    </ul>
  );
};

export default Chart;
