
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartData, chartOptions, width = "600px", height = "400px" }) => {
  return (
    <div style={{ width, height }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
