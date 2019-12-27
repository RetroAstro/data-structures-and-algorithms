import { expect } from 'chai'
import { invertTree } from '../../src/leetcode/invert-binary-tree'
import { Node } from '../../src/data-structures/binary-tree/node'
import { BinaryTreeTraverse } from '../../src/data-structures/binary-tree/binary-tree-traverse'
import { createBinaryTree } from '../data-structures/binary-tree/binary-tree-traverse.spec'

function output<T>(root: Node<T>) {
  let traverse = new BinaryTreeTraverse<T>(root)
  let result: T[] = []
  traverse.levelOrder(result)
  return result
}

describe('invert-binary-tree', () => {
  it('should output invert-binary-tree when input binary-tree', () => {
    expect(output(invertTree(createBinaryTree([4, 2, 7, 1, 3, 6, 9])))).to.deep.equal([4, 7, 2, 9, 6, 3, 1])
    expect(output(invertTree(createBinaryTree([1, 2, null])))).to.deep.equal([1, null, 2])
    expect(output(invertTree(createBinaryTree([2, 3, null, 1])))).to.deep.equal([2, null, 3, 1])
    expect(output(invertTree(createBinaryTree([2, null, 3, null, 1])))).to.deep.equal([2, 3, null, 1, null])
    expect(output(invertTree(createBinaryTree([3, 2, 4, null, null, 1])))).to.deep.equal([3, 4, 2, 1, null, null])
  })
})
