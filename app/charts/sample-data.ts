export function sampleData(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100),
  }));
}
