export enum Compare { lt = -1, gt = 1, eq = 0 }

export type Map<T> = (a: T, b: T) => [any, any]

export function compare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.eq
  }
  return a < b ? Compare.lt : Compare.gt
}

export function hoc<T>(func: Map<T> = (a: T, b: T) => [a, b]) {
  return (a: T, b: T) => compare(...func(a, b))
}

export function reverseCompare<T>(compareFn: Function) {
  return (a: T, b: T) => compareFn(b, a)
}
