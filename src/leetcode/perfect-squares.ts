export function numSquares(n: number) {
  let dp = Array(n + 1).fill(0)
  
  for (let i = 1; i <= n; i++) {
    dp[i] = i

    for (let j = 1; i - j ** 2 >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1)
    }
  }

  return dp[n]
}
