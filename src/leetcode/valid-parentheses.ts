export function isValid(s: string) {
  let matches = ['()', '{}', '[]']
  let stack = []

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])
    
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
