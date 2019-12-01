export function swap(array: any[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]]
}
