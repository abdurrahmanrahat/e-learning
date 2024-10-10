import useUser from "../../Hooks/api/useUser";
import BerCharts from "./BerChart/BerCharts";
import LineChart from "./LineChart/LineChart";
import PieCharts from "./PieCharts/PieCharts";
const Charts = () => {

  const { user } = useUser();

  //   pie charts
  const data = [
    { name: "Course Completion", value: 100 },
    { name: "Course Progress", value: 100 },
    { name: "Resources", value: 100 },
    { name: "Student Satisfaction", value: 100 },
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
      <div className="">
        <div className=" flex items-center justify-center">
          {
            user?.role === 'instructor' &&
            <div>
              <h2 className="text-2xl font-bold  text-gray-600 lg:text-start text-center">Course Duration</h2>
              <LineChart chartData={lineCharts1} chartOptions={optionsLineChart} />
            </div>
          }
        </div>
        <div className=" ">
          {
            user?.role === "student" &&
            <div>
              <h2 className="text-2xl font-bold text-center text-gray-600">
                Student Analysis
              </h2>
              <PieCharts data={data} colors={colors} />
            </div>
          }
        </div>
      </div>
      <div>
        {
          user?.role === 'admin' &&
          <div className="mt-16 mx-5 lg:mx-0">
            <h2 className="text-2xl font-bold  text-gray-600 ">
              Instructor Analytics
            </h2>
            <BerCharts></BerCharts>
          </div>
        }
      </div>
    </div>
  );
};

export default Charts;
