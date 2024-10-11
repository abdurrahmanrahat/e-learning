import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieCharts = () => {
  // Sample JSON Data
  const enrolledCoursesData = {
    "enrolledCourses": [
      {
        "courseId": "course001",
        "courseName": "Web Development",
        "modules": [
          {
            "moduleId": "module001",
            "videos": [
              {
                "duration": 300,  // Duration in seconds
                "watchedDuration": 150 // Duration watched by student in seconds
              },
              {
                "duration": 240,
                "watchedDuration": 240
              }
            ]
          },
          {
            "moduleId": "module002",
            "videos": [
              {
                "duration": 360,
                "watchedDuration": 180
              },
              {
                "duration": 420,
                "watchedDuration": 420
              }
            ]
          }
        ]
      },
      {
        "courseId": "course002",
        "courseName": "Python Programming",
        "modules": [
          {
            "moduleId": "module006",
            "videos": [
              {
                "duration": 360,
                "watchedDuration": 360
              }
            ]
          },
          {
            "moduleId": "module007",
            "videos": [
              {
                "duration": 240,
                "watchedDuration": 120
              }
            ]
          }
        ]
      }
    ]
  };

  // Calculate total duration and watched duration
  let totalDuration = 0;
  let watchedDuration = 0;
  let totalModules = 0;
  let completedModules = 0;

  enrolledCoursesData.enrolledCourses.forEach(course => {
    course.modules.forEach(module => {
      totalModules += 1; // Counting the module
      const moduleTotalDuration = module.videos.reduce((acc, video) => acc + video.duration, 0);
      const moduleWatchedDuration = module.videos.reduce((acc, video) => acc + video.watchedDuration, 0);

      totalDuration += moduleTotalDuration;
      watchedDuration += moduleWatchedDuration;

      if (moduleWatchedDuration > 0) {
        completedModules += 1; // Counting the completed module if watched duration is more than 0
      }
    });
  });

  // Convert durations from seconds to hours
  totalDuration /= 3600; // Convert seconds to hours
  watchedDuration /= 3600;

  // Calculating percentages for the Pie chart
  const durationWatchedPercentage = (watchedDuration / totalDuration) * 100;
  const completedModulesPercentage = (completedModules / totalModules) * 100;

  // Pie chart data
  const data = [
    { name: "Course Duration Watched", value: durationWatchedPercentage },
    { name: "Course Duration Remaining", value: 100 - durationWatchedPercentage },
    { name: "Completed Modules", value: completedModulesPercentage },
    { name: "Remaining Modules", value: 100 - completedModulesPercentage },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#22c55e"];

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
            {data.map((entry, index) => (
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
