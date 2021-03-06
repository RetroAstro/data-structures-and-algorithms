import { swap } from './swap'

export function selectionSort(array: number[]) {
  let { length } = array
  
  for (let i = 0; i < length; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    if (i !== min) {
      swap(array, i, min)
    }
  }

  return array
}
