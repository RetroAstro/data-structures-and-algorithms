export function mergeSort(array: number[]) {
  let { length } = array

  if (length > 1) {
    let middle = Math.floor(length / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle, length))
    array = merge(left, right)
  }

  return array
}

function merge(left: number[], right: number[]) {
  let i = 0
  let j = 0
  let result = []

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }
  
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
