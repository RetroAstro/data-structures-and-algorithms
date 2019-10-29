import { expect } from 'chai'
import { dailyTemperatures } from '../../src/leetcode/daily-temperatures'

describe('daily-temperatures', () => {
  it('should return new list when give daily temperatures list', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).to.deep.equal([1, 1, 4, 2, 1, 1, 0, 0])
  })
})
