"use client";

export default function PieChartBizcharts({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const formattedData = data.map((d) => ({
    name: d.name,
    value: d.value,
    percentage: ((d.value / total) * 100).toFixed(0),
  }));

  return (
    <div className="w-full h-[400px]">
      <p>Pie Chart (BizCharts)</p>
      <p>
        I tried to use BizCharts but it's not working, seems like it's not
        maintained?
      </p>
      <code>
        ReferenceError: Cannot access '__TURBOPACK__default__export__' before
        initialization at
        [project]/node_modules/@antv/g-canvas/esm/shape/path.js [app-ssr]
        (ecmascript) (../../src/shape/path.ts:29:19) at
        [project]/node_modules/@antv/g-canvas/esm/util/draw.js [app-ssr]
        (ecmascript) (../../src/util/draw.ts:7:43) at
        [project]/node_modules/@antv/g-canvas/esm/shape/base.js [app-ssr]
        (ecmascript) (../../src/shape/base.ts:4:67) at
        [project]/node_modules/bizcharts/es/animations.js [app-ssr] (ecmascript)
        (../src/animations.ts:8:85)
      </code>
    </div>
  );
}
