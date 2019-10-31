export function bubbleSort(array: number[]) {
  let { length } = array
  
  for (let i = 0; i < length; i++) {
    let flag = false
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        flag = true
      }
    }
    if (!flag) break
  }

  return array
}
