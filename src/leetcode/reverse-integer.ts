export function reverse(x: number) {
  let arr = x.toString().split('')
  let neg = ''

  if (arr[0] == '-') {
    neg = arr.shift()
  }
  while (arr[arr.length - 1] == '0') {
    arr.pop()
  }

  let res = Number(neg + arr.reverse().join(''))

  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
    return 0
  }
  return res
}
