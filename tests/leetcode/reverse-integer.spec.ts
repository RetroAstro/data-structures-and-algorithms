import { expect } from 'chai'
import { reverse } from '../../src/leetcode/reverse-integer'

describe('reverse-integer', () => {
  it('should reverse integer when giving numbers', () => {
    expect(reverse(123)).to.equal(321)
    expect(reverse(-123)).to.equal(-321)
    expect(reverse(120)).to.equal(21)
    expect(reverse(1534236469)).to.equal(0)
  })
})
