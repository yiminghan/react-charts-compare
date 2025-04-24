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
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg">
          <div>
            <a
              href="https://github.com/yiminghan/react-charts-compare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-200 shadow-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Edit on Github
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
