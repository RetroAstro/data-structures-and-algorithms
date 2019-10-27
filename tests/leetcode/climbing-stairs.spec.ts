import { expect } from 'chai'
import { climbStairs } from '../../src/leetcode/climbing-stairs'

describe('climbing-stairs', () => {
  it('should return correct number when give stairs', () => {
    expect(climbStairs(1)).to.equal(1)
    expect(climbStairs(2)).to.equal(2)
    expect(climbStairs(3)).to.equal(3)
    expect(climbStairs(4)).to.equal(5)
    expect(climbStairs(5)).to.equal(8)
    expect(climbStairs(6)).to.equal(13)
    expect(climbStairs(7)).to.equal(21)
    expect(climbStairs(8)).to.equal(34)
    expect(climbStairs(9)).to.equal(55)
    expect(climbStairs(10)).to.equal(89)
    expect(climbStairs(11)).to.equal(144)
    expect(climbStairs(12)).to.equal(233)
    expect(climbStairs(13)).to.equal(377)
    expect(climbStairs(14)).to.equal(610)
    expect(climbStairs(15)).to.equal(987)
    expect(climbStairs(16)).to.equal(1597)
    expect(climbStairs(17)).to.equal(2584)
    expect(climbStairs(18)).to.equal(4181)
    expect(climbStairs(19)).to.equal(6765)
    expect(climbStairs(20)).to.equal(10946)
  })
})
