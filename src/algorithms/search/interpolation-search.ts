export function interpolationSearch(array: number[], target: number) {
  let low = 0
  let high = array.length - 1
  
  while (low <= high && target >= array[low] && target <= array[high]) {
    let delta = (target - array[low]) / (array[high] - array[low])
    let mid = low + Math.floor((high - low) * delta)

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
