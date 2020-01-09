import { expect } from 'chai'
import { singleNumber } from '../../src/leetcode/single-number'

describe('single-number', () => {
  it('should return a single number when giving numbers', () => {
    expect(singleNumber([2, 2, 1])).to.equal(1)
    expect(singleNumber([4, 1, 2, 1, 2])).to.equal(4)
  })
})
