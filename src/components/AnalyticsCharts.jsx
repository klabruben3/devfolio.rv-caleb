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
    fill: `rgba(${index * 10}, ${index * 5}, ${index * 2.5}, ${
      index / skills.length
    })`,
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="90%"
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            background={{
              fill: "#22222269",
              strokeWidth: 2,
            }}
            stroke="orangered"
            dataKey="value"
            label={{
              position: "insideStart",
              fill: "gray",
              fontSize: 12,
              formatter: (value) => `${value}%`,
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
