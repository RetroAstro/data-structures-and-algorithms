export function mySqrt(x: number) {
  let low = 0
  let high = x

  while (low <= high) {
    let mid = (low + high) >> 1

    if (mid ** 2 === x) {
      return mid
    } else if (mid ** 2 > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return high
}
