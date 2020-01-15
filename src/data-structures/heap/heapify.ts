import { swap } from '../../algorithms/sorting/swap'

export function heapify<T>(array: any[], index: number, size: number, compare: (a: T, b: T) => boolean) {
  let temp = index
  let left = 2 * index + 1
  let right = 2 * index + 2

  if (left < size && compare(array[temp], array[left])) {
    temp = left
  }
  if (right < size && compare(array[temp], array[right])) {
    temp = right
  }
  if (temp !== index) {
    swap(array, temp, index)
    heapify(array, temp, size, compare)
  }
}
