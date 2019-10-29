export function dailyTemperatures(T: number[]) {
  let { length } = T
  let stack: number[] = []
  let result: number[] = Array(length).fill(0)

  for (let i = 0; i < length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop()
      result[index] = i - index
    }
    stack.push(i)
  }

  return result
}
