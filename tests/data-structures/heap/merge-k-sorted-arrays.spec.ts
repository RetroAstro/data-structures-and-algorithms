import { expect } from 'chai'
import { mergeKArrays } from '../../../src/data-structures/heap/merge-k-sorted-arrays'

describe('merge-k-sorted-arrays', () => {
  it('should merge k sorted arrays when giving 2D arrays', () => {
    expect(mergeKArrays([
      [1, 4, 5],
      [1, 3, 4],
      [2, 6, 8]
    ])).to.deep.equal([1, 1, 2, 3, 4, 4, 5, 6, 8])
  })
})
