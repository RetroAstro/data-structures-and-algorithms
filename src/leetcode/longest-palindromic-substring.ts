export function longestPalindrome(s: string) {
  let len = s.length
  let dp = Array.from({ length: len }, () => new Array(len).fill(0))
  let payload = { max: 0, res: '' }
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (s.charAt(i) == s.charAt(j) && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        let max = i - j + 1
        if (payload.max < max) {
          payload.max = max
          payload.res = s.slice(j, i + 1)
        }
      }
    }
  }
  return payload.res
}
