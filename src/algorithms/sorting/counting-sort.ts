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
    count[i] = count[i - 1] + count[i]
  }

  let res = []

  for (let i = length - 1; i >= 0; i--) {
    let index = count[array[i]] - 1
    res[index] = array[i]
    count[array[i]]--
  }

  return res
}
