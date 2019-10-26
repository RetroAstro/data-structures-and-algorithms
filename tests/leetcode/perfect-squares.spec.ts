import { expect } from 'chai'
import { numSquares } from '../../src/leetcode/perfect-squares'

describe('perfect-squares', () => {
  it('should return minimum perfect squares', () => {
    expect(numSquares(1)).to.equal(1)
    expect(numSquares(2)).to.equal(2)
    expect(numSquares(3)).to.equal(3)
    expect(numSquares(4)).to.equal(1)
    expect(numSquares(5)).to.equal(2)
    expect(numSquares(6)).to.equal(3)
    expect(numSquares(7)).to.equal(4)
    expect(numSquares(8)).to.equal(2)
    expect(numSquares(9)).to.equal(1)
    expect(numSquares(10)).to.equal(2)
    expect(numSquares(11)).to.equal(3)
    expect(numSquares(12)).to.equal(3)
    expect(numSquares(13)).to.equal(2)
    expect(numSquares(14)).to.equal(3)
    expect(numSquares(15)).to.equal(4)
    expect(numSquares(16)).to.equal(1)
    expect(numSquares(17)).to.equal(2)
    expect(numSquares(18)).to.equal(2)
    expect(numSquares(19)).to.equal(3)
    expect(numSquares(20)).to.equal(2)
  })
})
