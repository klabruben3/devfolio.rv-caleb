import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Math", A: 150, B: 110 },
  { subject: "Science", A: 98, B: 130 },
  { subject: "English", A: 86, B: 130 },
  { subject: "History", A: 99, B: 100 },
  { subject: "Art", A: 85, B: 90 },
  { subject: "PE", A: 65, B: 85 },
];

export default function RadarTest() {
  return (
    <ResponsiveContainer>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="100px"
        width={"500px"}
        height={"500px"}
        data={data}
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis dataKey="subject" fontSize={16} />
        <PolarRadiusAxis fontSize={12} />
        <Radar
          name="Student A"
          dataKey="A"
          stroke="orangered"
          fillOpacity={0.6}
        />
        <Radar name="Student B" dataKey="B" stroke="cyan" fillOpacity={0.6} />
      </RadarChart>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="white" />
        <PolarAngleAxis dataKey="subject" fontSize={16} />
        <PolarRadiusAxis fontSize={12} />
        <Radar
          name="Student A"
          dataKey="A"
          stroke="orangered"
          fillOpacity={0.6}
        />
        <Radar name="Student B" dataKey="B" stroke="cyan" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
