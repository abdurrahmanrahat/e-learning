import BerCh from "./BerCh";

const BerCharts = () => {
  // Data for the instructor analytics bar chart
  const data = {
    // labels: ["Instructor A", "Instructor B", "Instructor C", "Instructor D"], // Instructor names
    labels: ["Admin"], // Instructor names
    datasets: [
      {
        label: "Total Courses (%)",
        data: [1000, 600, 800, 700], // Completion rate for each instructor
        // data: [85, 70, 90, 75], // Completion rate for each instructor
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for bars
        borderColor: "rgba(75, 192, 192, 1)", // Border color for bars
        borderWidth: 1,
      },
      {
        label: "Total Instructor (%)",
        data: [90.5, 7.2, 9.7, 8.0], // Rating for each instructor
        // data: [4.5, 4.2, 4.7, 4.0], // Rating for each instructor
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Success (%)",
        data: [50, 50, 8, 6], // Number of courses for each instructor
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
     
      // {
      //   label: "Feedback Time (days)",
      //   data: [2, 4, 1, 3], // Average feedback time in days
      //   backgroundColor: "rgba(255, 99, 132, 0.6)",
      //   borderColor: "rgba(255, 99, 132, 1)",
      //   borderWidth: 1,
      // },
    ],
  };

  // Options for the bar chart (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "E-Learning Admin Analytics",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2>E-Learning Instructor Analytics</h2>
      <BerCh chartData={data} chartOptions={options} />
      
    </div>
  );
};

export default BerCharts;
