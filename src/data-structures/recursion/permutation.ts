export function permutation(nums: number[]) {
  if (nums.length === 1) {
    return [nums]
  }
  
  let result: number[][] = [] 

  function recursive(fixed: number[], rest: number[]) {
    if (rest.length === 1) {
      return [...fixed, ...rest]
    }
    return rest.map(num => {
      let temp = [...fixed, num]
      let mids = recursive(temp, rest.filter(item => item !== num))

      if (mids.length === nums.length) {
        result.push(mids as number[])
      }
    })
  }

  recursive([], nums)

  return result
}
