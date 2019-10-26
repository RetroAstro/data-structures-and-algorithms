export function threeSum(nums: number[]) {
  let result: any[] = []
  let map = <any>{}

  for (let i = 0; i < nums.length; i++) {
    twoSum(-nums[i], i)
  }

  return result

  function twoSum(target: number, self: number) {
    let obj = <any>{}
    for (let i = 0; i < nums.length; i++) {
      if (self === i) {
        continue
      }
      if (obj[nums[i]] !== undefined) {
        let value = sort([obj[nums[i]], nums[i], nums[self]])
        let key = value.join('')
        if (map[key]) {
          continue
        } else {
          map[key] = value
        }
        result.push(value)
      } else {
        obj[target - nums[i]] = nums[i]
      }
    }
  }

  function sort(array: number[]) {
    return array.sort((a, b) => a - b)
  }
}