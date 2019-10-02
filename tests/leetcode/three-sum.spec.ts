import { expect } from 'chai'
import { threeSum } from '../../src/leetcode/three-sum'

describe('three-sum', () => {
  it('should return unique arrays when a + b + c = 0 in nums', () => {
    let nums = [-1, 0, 1, 2, -1, -4]
    expect(threeSum(nums)).to.deep.equal([[-1, 0, 1], [-1, -1, 2]])
  })
})
