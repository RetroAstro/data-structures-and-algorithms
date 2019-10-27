export function climbStairs(n: number) {
  if (n === 1) return 1
  if (n === 2) return 2
  
  let result = 0
  let prev = 2
  let doublePrev = 1

  for (let i = 3; i <= n; i++) {
    result = prev + doublePrev
    doublePrev = prev
    prev = result
  }

  return result
}
