export function radixSort(array: number[]) {
  let { length } = array
  let max = 0

  for (let i = 0; i < length; i++) {
    let len = array[i].toString().length
    if (max < len) {
      max = len
    }
  }

  let temp: string[] = []

  for (let i = 0; i < length; i++) {
    let str = array[i].toString()
    while (str.length < max) {
      str = '0' + str
    }
    temp[i] = str
  }
  while (max > 0) {
    let items = temp.map(item => [Number(item[max - 1]), item])
    temp = countingSort(items)
    max--
  }
  for (let i = 0; i < length; i++) {
    array[i] = Number(temp[i])
  }

  return array
}

function countingSort(array: any[][]) {
  let { length } = array
  let count = []
  let base = 10

  for (let i = 0; i < base; i++) {
    count[i] = 0
  }
  for (let i = 0; i < length; i++) {
    count[array[i][0]]++
  }
  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1]
  }

  let res = []

  for (let i = length - 1; i >= 0; i--) {
    let index = count[array[i][0]] - 1
    res[index] = array[i][1]
    count[array[i][0]]--
  }

  return res
}
