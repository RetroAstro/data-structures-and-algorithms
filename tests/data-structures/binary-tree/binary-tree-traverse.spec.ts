import { expect } from 'chai'
import { Node } from '../../../src/data-structures/binary-tree/node'
import { BinaryTreeTraverse } from '../../../src/data-structures/binary-tree/binary-tree-traverse'

export function createBinaryTree<T>(array: T[], index: number = 0) {
  let treeNode: Node<T> = null
  if (index < array.length) {
    treeNode = new Node<T>(array[index])
    treeNode.left = createBinaryTree(array, 2 * index + 1)
    treeNode.right = createBinaryTree(array, 2 * index + 2)
  }
  return treeNode
}

function createInstance<T>(array: T[]) {
  let tree = createBinaryTree(array)
  return new BinaryTreeTraverse<T>(tree)
}

describe('binary-tree-traverse', () => {
  it('start empty', () => {
    let instance = createInstance([])
    let res1: any = [], res2: any = [], res3: any = [], res4: any = []
    instance.preOrder(res1)
    instance.inOrder(res2)
    instance.postOrder(res3)
    instance.levelOrder(res4)
    expect(instance.tree).to.be.null
    expect(res1).to.deep.equal([])
    expect(res2).to.deep.equal([])
    expect(res3).to.deep.equal([])
    expect(res4).to.deep.equal([])
  })

  it('pre-order traverse', () => {
    let result: string[] = []
    let instance = createInstance(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    instance.preOrder(result)
    expect(result).to.deep.equal(['A', 'B', 'D', 'E', 'C', 'F', 'G'])
  })

  it('in-order traverse', () => {
    let result: string[] = []
    let instance = createInstance(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    instance.inOrder(result)
    expect(result).to.deep.equal(['D', 'B', 'E', 'A', 'F', 'C', 'G'])
  })

  it('post-order traverse', () => {
    let result: string[] = []
    let instance = createInstance(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    instance.postOrder(result)
    expect(result).to.deep.equal(['D', 'E', 'B', 'F', 'G', 'C', 'A'])
  })

  it('level-order traverse', () => {
    let result: string[] = []
    let instance = createInstance(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    instance.levelOrder(result)
    expect(result).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  })
})
