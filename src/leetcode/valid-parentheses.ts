export function isValid(s: string) {
  let arr = s.split('')
  let matches = ['()', '{}', '[]']
  let stack = []

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])

    if (stack[stack.length - 1] && stack[stack.length - 2]) {
      let str = stack[stack.length - 2] + stack[stack.length - 1]
      
      if (matches.includes(str)) {
        stack.pop()
        stack.pop()
      }
    }
  }

  return !stack.length
}
