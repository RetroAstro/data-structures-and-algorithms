export function countSubstrings(s: string) {
  let count = 0
  let len = s.length
  let dp = Array.from({ length: len }, () => new Array(len).fill(0))

  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (s.charAt(i) == s.charAt(j) && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        count++
      }
    }
  }
  
  return count
}
