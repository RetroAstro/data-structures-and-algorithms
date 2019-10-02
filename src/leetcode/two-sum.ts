type map = { [key: number]: number }

export function twoSum(nums: number[], target: number) {
  let obj = <map>{}
  
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i]
    } else {
      var key = target - nums[i]
      obj[key] = i
    }
  }

  return []
}
