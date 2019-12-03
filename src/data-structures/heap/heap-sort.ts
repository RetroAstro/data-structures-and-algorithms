import { swap } from '../../algorithms/sorting/swap'

export function heapSort(array: number[]) {
  buildMaxHeap(array)
  let size = array.length
  while (size > 1) {
    swap(array, 0, --size)
    heapify(array, 0, size)
  }
  return array
}

function buildMaxHeap(array: number[]) {
  let maxIndex = Math.floor(array.length / 2)
  for (let i = maxIndex; i >= 0; i--) {
    heapify(array, i, array.length)
  }
}

function heapify(array: number[], index: number, size: number) {
  let temp = index
  let left = 2 * index + 1
  let right = 2 * index + 2
  if (left < size && array[temp] < array[left]) {
    temp = left
  }
  if (right < size && array[temp] < array[right]) {
    temp = right
  }
  if (temp !== index) {
    swap(array, temp, index)
    heapify(array, temp, size)
  }
}
