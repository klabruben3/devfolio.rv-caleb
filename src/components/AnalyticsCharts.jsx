import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export function AnalyticsCharts({ skills }) {
  // Transform skills data for radial chart
  const chartData = skills.map((skill, index) => ({
    name: skill.name,
    value: skill.level,
    fill: `hsl(${190 + index * 30}, 70%, 60%)`,
  }));

  return (
    <div className="w-full h-[300px] min-w-0">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            label={{
              position: "insideStart",
              fill: "#fff",
              fontSize: 12,
              formatter: (value) => `${value}%`,
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
