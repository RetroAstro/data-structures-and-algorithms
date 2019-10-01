type res = { [key: number]: number }

export function twoSum(nums: number[], target: number) {
  let result: number[] = []
  let obj = <res>{}
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
  }
  
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (obj[key] && i !== obj[key]) {
      result = [i, obj[key]]
      break
    }
  }

  return result
}
