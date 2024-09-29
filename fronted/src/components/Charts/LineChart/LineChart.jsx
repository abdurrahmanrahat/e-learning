
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register required elements from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ chartData, chartOptions, width = "600px", height = "400px" }) => {
  return (
    <div style={{ width, height }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
