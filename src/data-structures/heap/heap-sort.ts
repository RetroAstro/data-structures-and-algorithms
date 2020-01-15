import { swap } from '../../algorithms/sorting/swap'
import { heapify } from './heapify'

export function heapSort(array: number[]) {
  buildMaxHeap(array)
  let size = array.length
  while (size > 1) {
    swap(array, 0, --size)
    heapify(array, 0, size, compare)
  }
  return array
}

function buildMaxHeap(array: number[]) {
  let maxIndex = Math.floor(array.length / 2)
  for (let i = maxIndex; i >= 0; i--) {
    heapify(array, i, array.length, compare)
  }
}

function compare(a: number, b: number) {
  return a < b
}
