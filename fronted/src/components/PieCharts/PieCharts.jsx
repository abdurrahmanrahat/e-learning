import Pie from "./Charts";

const PieCharts = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    
      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div>
            <Pie data={data} colors={colors}></Pie>
        </div>
    );
};

export default PieCharts;