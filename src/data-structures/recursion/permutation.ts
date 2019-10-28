export function permutation(nums: number[]) {
  if (nums.length === 1) {
    return [nums]
  }
  
  let result: number[][] = [] 

  function recursive(fixed: number[], left: number[]) {
    if (left.length === 1) {
      return [...fixed, ...left]
    }
    return left.map(num => {
      let temp = [...fixed]
      temp[temp.length] = num
      
      let mids = recursive(temp, left.filter(item => item !== num))

      if (mids.length === nums.length) {
        result.push(mids as number[])
      }
    })
  }

  recursive([], nums)

  return result
}
