"use client";

import { useMemo, useState } from "react";
import PieChartRecharts from "./charts/rechart/pie";
import { sampleData } from "./charts/sample-data";
import PieChartChartJS from "./charts/react-chartjs2/pie";
import PieChartNivoCanvas from "./charts/nivo/pie-canvas";
import PieChartNivoSVG from "./charts/nivo/pie-svg";
import PieChartBizcharts from "./charts/bizcharts/pie";

enum ChartType {
  RECHART = "rechart",
  CHARTJS = "chartjs",
  NIVO_CANVAS = "nivo-canvas",
  NIVO_SVG = "nivo-svg",
  BIZCHART = "bizchart",
}

export default function Home() {
  const [dataSize, setDataSize] = useState(10);
  const [chartType, setChartType] = useState<ChartType>(ChartType.RECHART);

  const data = useMemo(() => sampleData(dataSize), [dataSize]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
        <h1 className="text-4xl font-bold">React Charts Performance</h1>
        <div className="flex flex-col items-center gap-4 bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
          <div className="flex gap-2">
            {Object.values(ChartType).map((type) => (
              <button
                key={type}
                className={`px-3 py-1.5 rounded-md border shadow-sm transition-colors ${
                  chartType === type
                    ? "bg-blue-500 text-white border-blue-600"
                    : "bg-white hover:bg-gray-100 text-gray-800 border-gray-200"
                }`}
                onClick={() => setChartType(type)}
              >
                {type === ChartType.RECHART && "Recharts"}
                {type === ChartType.CHARTJS && "Chart.js"}
                {type === ChartType.NIVO_CANVAS && "Nivo (Canvas)"}
                {type === ChartType.NIVO_SVG && "Nivo (SVG)"}
                {type === ChartType.BIZCHART && "BizCharts"}
              </button>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="text"
              value={`${dataSize} Items`}
              readOnly
              className="text-gray-700 font-medium bg-transparent outline-none"
            />
            <div className="flex gap-2">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md border border-gray-200 shadow-sm transition-colors"
                onClick={() => setDataSize(Math.max(0, dataSize - 5))}
              >
                -
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md border border-gray-200 shadow-sm transition-colors"
                onClick={() => setDataSize(dataSize + 5)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {chartType === ChartType.RECHART && <PieChartRecharts data={data} />}
          {chartType === ChartType.CHARTJS && <PieChartChartJS data={data} />}
          {chartType === ChartType.NIVO_CANVAS && (
            <PieChartNivoCanvas data={data} />
          )}
          {chartType === ChartType.NIVO_SVG && <PieChartNivoSVG data={data} />}
          {chartType === ChartType.BIZCHART && (
            <PieChartBizcharts data={data} />
          )}
        </div>
      </main>
    </div>
  );
}
