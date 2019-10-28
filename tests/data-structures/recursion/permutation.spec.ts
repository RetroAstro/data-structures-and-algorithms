import { expect } from 'chai'
import { permutation } from '../../../src/data-structures/recursion/permutation'

describe('permutation', () => {
  it('should return all permutations when give an array', () => {
    expect(permutation([1])).to.deep.equal([[1]])
    expect(permutation([1, 2, 3])).to.deep.equal([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })
})
