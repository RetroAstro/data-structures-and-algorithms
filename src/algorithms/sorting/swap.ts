export function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]]
}
