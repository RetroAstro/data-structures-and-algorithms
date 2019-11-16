import { expect } from 'chai'
import { mySqrt } from '../../src/leetcode/sqrtx'

describe('sqrtx', () => {
  it('should return correct sqrt when give x', () => {
    expect(mySqrt(0)).to.equal(0)
    expect(mySqrt(1)).to.equal(1)
    expect(mySqrt(2)).to.equal(1)
    expect(mySqrt(3)).to.equal(1)
    expect(mySqrt(4)).to.equal(2)
    expect(mySqrt(5)).to.equal(2)
    expect(mySqrt(6)).to.equal(2)
    expect(mySqrt(7)).to.equal(2)
    expect(mySqrt(8)).to.equal(2)
    expect(mySqrt(9)).to.equal(3)
    expect(mySqrt(10)).to.equal(3)
  })
})
