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
      
      let middle = recursive(temp, left.filter(item => item !== num))

      if (middle.length === nums.length) {
        result.push(middle as number[])
      }
    })
  }

  recursive([], nums)

  return result
}
