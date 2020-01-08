export function lengthOfLongestSubstring(s: string) {
  if (s == '') return 0
  let max = 1
  let cursor = 0
  let stack: string[] = []

  while (cursor < s.length) {
    let i = cursor
    while (stack.every(item => item != s[i])) {
      stack.push(s[i])
      i++
      if (s[i] == null) break
    }
    if (max < stack.length) {
      max = stack.length
    }
    stack = []
    cursor++
  }
  
  return max
}
