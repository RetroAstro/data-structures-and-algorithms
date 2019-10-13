import { expect } from 'chai'
import { trap } from '../../src/leetcode/trapping-rain-water'

describe('trapping-rain-water', () => {
  it('should trap correct size water when give different walls', () => {
    let walls = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    expect(trap(walls)).to.equal(6)
  })
})
