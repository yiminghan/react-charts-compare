"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { COLORS } from "../color";

const renderCustomizedLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center">
          <div
            className="mr-1 h-3 w-3 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function PieChartRecharts({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <div className="w-full h-[400px] flex flex-col items-center">
      <p>Pie Chart (Recharts)</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
            label={({ _, percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [value, name]}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "6px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
