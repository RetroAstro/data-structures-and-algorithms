export function binarySearchRecursive(array: number[], target: number) {
  return recursive(array, target, 0, array.length - 1)
  
  function recursive(array: number[], target: number, low: number, high: number): number {
    if (low > high) return -1

    let mid = low + ((high - low) >> 1)

    if (target === array[mid]) {
      return mid
    } else if (target > array[mid]) {
      return recursive(array, target, mid + 1, high)
    } else {
      return recursive(array, target, low, mid - 1)
    }
  }
}
