import { swap } from './swap'

export function bubbleSort(array: number[]) {
  let { length } = array
  
  for (let i = 0; i < length; i++) {
    let flag = false
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        flag = true
      }
    }
    if (!flag) break
  }

  return array
}
