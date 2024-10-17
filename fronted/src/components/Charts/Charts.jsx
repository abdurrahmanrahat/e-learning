

import BerCharts from "./BerChart/BerCharts";
import LineChart from "./LineChart/LineChart";
import PieCharts from "./PieCharts/PieCharts";
const Charts = () => {
  //   pie charts
  const data = [
    { name: "Course Completion", value: 400 },
    { name: "Course Progress", value: 300 },
    { name: "Resources", value: 300 },
    { name: "Student Satisfaction", value: 200 },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#22c55e"];

  // line charts
  const lineCharts1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };
  
  const optionsLineChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Course Duration",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex lg:flex-row flex-col lg:mx-0 gap-5">
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div>
          <h2 className="text-2xl font-bold  text-gray-600 lg:text-start text-center">Course Duration</h2>
          <LineChart chartData={lineCharts1} chartOptions={optionsLineChart} />
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <div>
          <h2 className="text-2xl font-bold lg:text-end text-center text-gray-600">
            Student Analysis
          </h2>
          <PieCharts data={data} colors={colors} />
          </div>
        </div>
      </div>
      <div className="mt-16 mx-5 lg:mx-0">
        <h2 className="text-2xl font-bold  text-gray-600 ">
          Admin Analytics
        </h2>
        <BerCharts></BerCharts>
      </div>
    </div>
  );
};

export default Charts;
