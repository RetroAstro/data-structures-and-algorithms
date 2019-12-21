import { expect } from 'chai'
import { maxDepth } from '../../src/leetcode/maximum-depth-of-binary-tree'
import { createBinaryTree } from '../data-structures/binary-tree/binary-tree-traverse.spec'

describe('maximum-depth-of-binary-tree', () => {
  it('should return max depth when traversing binary tree', () => {
    expect(maxDepth(createBinaryTree([3, 9, 20, null, null, 15, 7]))).to.equal(3)
  })
})
