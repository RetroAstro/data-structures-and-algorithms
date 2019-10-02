type map = { [key: number]: number }

export function twoSum(nums: number[], target: number) {
  let obj = <map>{}
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
  }
  
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (obj[key] && i !== obj[key]) {
      return [i, obj[key]]
    }
  }
  
  return undefined
}
