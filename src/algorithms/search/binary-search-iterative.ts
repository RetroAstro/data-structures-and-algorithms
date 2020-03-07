export function binarySearchIterative(array: number[], target: number) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = (low + high) >> 1

    if (target === array[mid]) {
      return mid
    } else if (target > array[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}
