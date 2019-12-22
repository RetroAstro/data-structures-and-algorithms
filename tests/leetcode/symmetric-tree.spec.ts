import { expect } from 'chai'
import { isSymmetric } from '../../src/leetcode/symmetric-tree'
import { createBinaryTree } from '../data-structures/binary-tree/binary-tree-traverse.spec'

describe('symmetric-tree', () => {
  it('start empty', () => {
    expect(isSymmetric('iteration')(null)).to.be.true
  })

  it('should return true when giving symmetric-tree', () => {
    expect(isSymmetric('iteration')(createBinaryTree([1, 2, 2, 3, 4, 4, 3]))).to.be.true
  })

  it('should return false when not a symmetric-tree', () => {
    expect(isSymmetric('iteration')(createBinaryTree([1, 2]))).to.be.false
    expect(isSymmetric('iteration')(createBinaryTree([2, 3, 3, 4, 5, 5, 4, null, null, 8, 9, null, null, 9, 8]))).to.be.false
  })
})
