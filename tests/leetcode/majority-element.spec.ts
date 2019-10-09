import { expect } from 'chai'
import { majorityElement } from '../../src/leetcode/majority-element'

describe('majority-element', () => {
  it('should return majority element when input array', () => {
    expect(majorityElement([3, 2, 3])).to.equal(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.equal(2)
  })
})
