export function insertionSort(array: number[]) {
  let { length } = array

  for (let i = 1; i < length; i++) {
    let j = i - 1
    let value = array[i]
    for (; j >= 0; j--) {
      if (array[j] > value) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }
    array[j + 1] = value
  }

  return array
}
