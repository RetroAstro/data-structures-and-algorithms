type Map = { [key: number]: number }

export function twoSum(nums: number[], target: number) {
  let obj = <Map>{}
  
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i]
    } else {
      let key = target - nums[i]
      obj[key] = i
    }
  }

  return []
}
