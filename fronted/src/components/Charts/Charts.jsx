import useUser from "../../Hooks/api/useUser";
import BerCharts from "./BerChart/BerCharts";
import LineChart from "./LineChart/LineChart";
import PieCharts from "./PieCharts/PieCharts";
const Charts = () => {

  const {user}=useUser()

  return (

    <div className="my-20">
      <div className="">
        <div className=" flex items-center justify-center">
          {
            user?.role === 'instructor' &&
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-600 lg:text-start text-center">Course Duration</h2>
              <LineChart />
            </div>
          }
        </div>
        <div className=" ">
          {
            user?.role === "student" &&
            <div>
              <h2 className="text-2xl mb-6 font-bold text-center text-gray-600">
                Student Analysis
              </h2>
              <PieCharts />
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
