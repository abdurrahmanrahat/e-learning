import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const PieCharts = ({ data, colors }) => {
    return (
        <div>
        <ResponsiveContainer width="100%" height={400}>
   <PieChart>
     <Pie
       data={data}
       dataKey="value"
       nameKey="name"
       cx="50%"
       cy="50%"
       outerRadius={150}
       label
     >
       {data?.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
       ))}
     </Pie>
     <Tooltip />
     <Legend />
   </PieChart>
 </ResponsiveContainer> 
     </div>
    );
};

export default PieCharts;