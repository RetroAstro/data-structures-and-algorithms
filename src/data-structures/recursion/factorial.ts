export function factorial(n: number, total: number = 1): number {
  if (n < 0) {
    return undefined
  }

  if (n === 0 || n === 1) {
    return total
  }

  return factorial(n - 1, n * total)
}
