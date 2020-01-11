export function generateParenthesis(n: number) {
  let pair = ['(', ')']
  let res: string[] = []

  recursive(0, '')
  return res
  
  function recursive(depth: number, str: string) {
    depth++
    if (depth == 2 * n + 1) {
      if (isValid(str)) {
        res.push(str)
      }
    } else {
      pair.forEach(p => recursive(depth, str + p))
    }
  }

  function isValid(str: string) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
      if (stack[stack.length - 1] + str[i] == '()') {
        stack.pop()
      } else {
        stack.push(str[i])
      }
    }
    return stack.length == 0
  }
}
