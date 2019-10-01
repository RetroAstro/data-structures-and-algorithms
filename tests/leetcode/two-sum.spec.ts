import { expect } from 'chai'
import { twoSum } from '../../src/leetcode/two-sum'

describe('two-sum', () => {
  it('should return [index1, index2] when nums[index1] + nums[index2] = target', () => {
    let nums = [2, 7, 11, 15]
    let target = 9
    expect(twoSum(nums, target)).to.deep.equal([0, 1])
  })
})
