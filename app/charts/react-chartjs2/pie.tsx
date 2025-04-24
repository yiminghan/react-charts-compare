"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { COLORS } from "../color";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartChartJS({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const chartData: ChartData<"pie"> = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((_, index) => COLORS[index % COLORS.length]),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "rgb(229, 231, 235)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div className="w-full h-[400px] flex flex-col items-center">
      <p>Pie Chart (Chart.js)</p>
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
