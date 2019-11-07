import { quickSort } from '../algorithms/sorting/quick-sort'

export class KthLargest {
  private k: number
  private sorted: number[]

  constructor(k: number, nums: number[]) {
    this.k = k
    this.sorted = quickSort(nums)
  }

  add(val: number) {
    let array = this.sorted
    let j = this.sorted.length - 1

    for (; j >= 0; j--) {
      if (array[j] > val) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }

    array[j + 1] = val

    return array[array.length - this.k]
  }
}
