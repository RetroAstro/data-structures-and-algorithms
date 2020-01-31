export function checkSubarraySum(nums: number[], k: number) {
  let sum = 0
  let map: any = {}

  map[0] = -1

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (k != 0) {
      sum = sum % k
    }
    if (map[sum] != null) {
      if (i - map[sum] > 1) {
        return true
      }
    } else {
      map[sum] = i
    }
  }

  return false
}
