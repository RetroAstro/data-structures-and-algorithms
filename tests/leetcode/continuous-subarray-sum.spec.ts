import { expect } from 'chai'
import { checkSubarraySum } from '../../src/leetcode/continuous-subarray-sum'

describe('continuous-subarray-sum', () => {
  it('should check subarray sum when giving arrays', () => {
    expect(checkSubarraySum([1, 2], 0)).to.equal(false)
    expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).to.equal(true)
  })
})
