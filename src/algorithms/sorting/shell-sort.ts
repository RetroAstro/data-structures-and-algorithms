import { swap } from './swap'

export function shellSort(array: number[]) {
  let { length } = array
  let gap = Math.floor(length / 2)

  while (gap > 0) {
    for (let i = 0; i < length - gap; i++) {
      let currentIndex = i
      let gapIndex = i + gap

      while (currentIndex >= 0) {
        if (array[currentIndex] > array[gapIndex]) {
          swap(array, currentIndex, gapIndex)
        }
        gapIndex = currentIndex
        currentIndex -= gap
      }
    }
    gap = Math.floor(gap / 2)
  }

  return array
}
