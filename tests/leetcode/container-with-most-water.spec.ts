import { expect } from 'chai'
import { maxArea } from '../../src/leetcode/container-with-most-water'

describe('container-with-most-water', () => {
  it('should return maxArea when giving an array', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.equal(49)
  })
})
