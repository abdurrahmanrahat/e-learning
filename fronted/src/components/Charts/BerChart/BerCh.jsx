
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components in ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BerCh = ({ chartData, chartOptions }) => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BerCh;
