export function countingSort(array: number[]) {
  let { length } = array
  let max = -1

  for (let i = 0; i < length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }

  let count = []

  for (let i = 0; i <= max; i++) {
    count[i] = 0
  }
  for (let i = 0; i < length; i++) {
    count[array[i]]++
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1]
  }

  let temp = []

  for (let i = length - 1; i >= 0; i--) {
    let index = count[array[i]] - 1
    temp[index] = array[i]
    count[array[i]]--
  }
  for (let i = 0; i < length; i++) {
    array[i] = temp[i]
  }

  return array
}
