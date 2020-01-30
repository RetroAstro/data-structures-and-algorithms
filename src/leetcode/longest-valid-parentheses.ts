export function longestValidParentheses(s: string) {
  let stack = []
  let arr = [null, ...s.split(''), null].map((item, index) => [item, index] as any)

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])

    if (stack[stack.length - 1] && stack[stack.length - 2]) {
      let str = stack[stack.length - 2][0] + stack[stack.length - 1][0]

      if (str == '()') {
        stack.pop()
        stack.pop()
      }
    }
  }

  let max = 0

  for (let i = 1; i < stack.length; i++) {
    let gap = stack[i][1] - stack[i - 1][1] - 1
    if (max < gap) {
      max = gap
    }
  }

  return max
}
