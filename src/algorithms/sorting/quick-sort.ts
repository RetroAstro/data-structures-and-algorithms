import { swap } from './swap'

export function quickSort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) {
  if (left < right) {
    let index = partition(array, left, right)
    quickSort(array, left, index - 1)
    quickSort(array, index + 1, right)
  }

  return array
}

function partition(array: number[], left: number, right: number) {
  dealPivot(array, left, right)

  let i = left
  let j = right - 1
  let pivot = array[right - 1]

  while (i !== j) {
    while (array[++i] < pivot) {}
    while (i < j && array[--j] > pivot) {}
    swap(array, i, j)
  }

  swap(array, i, right - 1)
  
  return i
}

function dealPivot(array: number[], left: number, right: number) {
  let middle = Math.floor((left + right) / 2)

  if (array[left] > array[middle]) {
    swap(array, left, middle)
  }
  if (array[middle] > array[right]) {
    swap(array, middle, right)
  }
  if (array[left] > array[middle]) {
    swap(array, left, middle)
  }
  
  swap(array, middle, right - 1)
}
