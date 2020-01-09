export function singleNumber(nums: number[]) {
  return nums.reduce((prev, next) => prev ^= next)
}
