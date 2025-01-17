export function groupStrings(arr: string[]): string[] {
  const count: {[key: string]: number} = {};

  for (const str of arr) {
    count[str] = (count[str] || 0) + 1;
  }

  const result: string[] = Object.entries(count).map(([s, c]) => {
    return c > 1 ? `${s} (${c}x)` : s;
  });

  return result;
}
