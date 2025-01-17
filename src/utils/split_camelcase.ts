export function splitCamelCase(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
}
