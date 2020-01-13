import { expect } from 'chai'
import { nextPermutation } from '../../src/leetcode/next-permutation'

describe('next-permutation', () => {
  it('should return next permutation when giving an array', () => {
    expect(nextPermutation([1, 2, 3])).to.deep.equal([1, 3, 2])
    expect(nextPermutation([3, 2, 1])).to.deep.equal([1, 2, 3])
    expect(nextPermutation([1, 1, 5])).to.deep.equal([1, 5, 1])
    expect(nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1])).to.deep.equal([1, 5, 8, 5, 1, 3, 4, 6, 7])
  })
})
