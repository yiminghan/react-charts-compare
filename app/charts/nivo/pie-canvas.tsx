"use client";

import { ResponsivePieCanvas } from "@nivo/pie";
import { COLORS } from "../color";

export default function PieChartNivoCanvas({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const formattedData = data.map((d) => ({
    id: d.name,
    label: d.name,
    value: d.value,
  }));

  return (
    <div className="w-full h-[400px] flex flex-col items-center">
      <p>Pie Chart (Nivo)</p>
      <ResponsivePieCanvas
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.4}
        padAngle={2}
        colors={COLORS}
        arcLabel={(d) =>
          `${(
            (d.value / data.reduce((sum, item) => sum + item.value, 0)) *
            100
          ).toFixed(0)}%`
        }
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="white"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateY: 60,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
