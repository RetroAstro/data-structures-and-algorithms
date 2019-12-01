export enum Compare { lt = -1, gt = 1, eq = 0 }

export function compare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.eq
  }
  return a < b ? Compare.lt : Compare.gt
}

export function reverseCompare<T>(compareFn: Function) {
  return (a: T, b: T) => compareFn(b, a)
}
