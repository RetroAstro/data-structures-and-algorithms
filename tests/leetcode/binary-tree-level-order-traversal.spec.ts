import { expect } from 'chai'
import { levelOrder } from '../../src/leetcode/binary-tree-level-order-traversal'
import { BinarySearchTree } from '../../src/data-structures/binary-tree/binary-search-tree'

function createBinaryTree<T>(array: T[]) {
  let tree = new BinarySearchTree<T>()
  array.forEach(item => tree.insert(item))
  return tree
}

describe('binary-tree-level-order-traversal', () => {
  it('empty tree', () => {
    expect(levelOrder(null)).to.deep.equal([])
  })

  it('should return correct level-order result', () => {
    let root = createBinaryTree([9, 3, 15, 7, 20]).getRoot()
    expect(levelOrder(root)).to.deep.equal([[9], [3, 15], [7, 20]])
  })
})
