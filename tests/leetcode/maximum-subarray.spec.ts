import { expect } from 'chai'
import { maxSubArray } from '../../src/leetcode/maximum-subarray'

describe('maximum-subarray', () => {
  it('should return maximum subarray when giving arrays', () => {
    expect(maxSubArray([1, 2, 3])).to.equal(6)
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6)
  })
})