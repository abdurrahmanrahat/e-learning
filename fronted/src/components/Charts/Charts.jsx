import BerChart from '../Charts/BerChart/BerChart';
import LineChart from './LineChart/LineChart';
import PieCharts from './PieCharts/PieCharts';
const Charts = () => {
  // ber charts 
  const dataBerChart = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#49BBBD",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart Title",
      },
    },
  };

//   pie charts 
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#22c55e'];
  
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
const lineCharts2 = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Revenue",
      data: [200, 400, 300, 500],
      fill: false,
      borderColor: "#00C49F",
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
      text: "Line Chart Example",
    },
  },
};
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <div className='flex lg:flex-row flex-col gap-5'>
      <div className='w-full lg:w-[50%] '>
      <h2 className='text-3xl font-bold'>Ber Chart</h2>
      <BerChart chartData={dataBerChart} chartOptions={options} />
      
      </div>
<div className='w-full lg:w-[50%] '>
<h2 className='text-3xl font-bold'>Pie chart</h2>
<PieCharts data={data} colors={colors} />
</div>
      </div>
<div className='flex lg:flex-row flex-col gap-5 mt-20'>
      <div className='w-full lg:w-[50%] '>
      <h2 className='text-3xl font-bold'>Line chart 1</h2>
      <LineChart chartData={lineCharts1} chartOptions={optionsLineChart} />
      </div>
<div className='w-full lg:w-[50%] '>
<h2 className='text-3xl font-bold'>Line chart 2</h2>
<LineChart chartData={lineCharts2} chartOptions={optionsLineChart} />
</div>
      </div>
    </div>
  );
};

export default Charts;
