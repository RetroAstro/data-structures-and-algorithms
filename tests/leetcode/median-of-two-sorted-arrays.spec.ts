import { expect } from 'chai'
import { findMedianSortedArrays } from '../../src/leetcode/median-of-two-sorted-arrays'

describe('median-of-two-sorted-arrays', () => {
  it('should return median when giving two sorted arrays', () => {
    expect(findMedianSortedArrays([1, 3], [2])).to.equal(2)
    expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5)
  })
})
