type Map = { [key: number]: number }

export function fibonacci(n: number) {
  let map = <Map>{}

  function f(n: number): number {
    if (n === 0) return 0
    if (n === 1) return 1

    if (map[n]) return map[n]

    let result = f(n - 1) + f(n - 2)
    map[n] = result
    return result
  }

  return f(n)
}
