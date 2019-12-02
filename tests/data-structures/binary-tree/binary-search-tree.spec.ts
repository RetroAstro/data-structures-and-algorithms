import { expect } from 'chai'
import { BinarySearchTree } from '../../../src/data-structures/binary-tree/binary-search-tree'
import { BinaryTreeTraverse } from '../../../src/data-structures/binary-tree/binary-tree-traverse'

function inOrderTraverse<T>(tree: BinarySearchTree<T>) {
  let traverse = new BinaryTreeTraverse<T>(tree.getRoot())
  let result: T[] = []
  traverse.inOrder(result)
  return result
}

function insertNodes<T>(array: T[], tree: BinarySearchTree<T>) {
  array.forEach(item => tree.insert(item))
}

describe('binary-search-tree', () => {
  let tree: BinarySearchTree<number>

  beforeEach(() => {
    tree = new BinarySearchTree<number>()
  })

  it('start empty', () => {
    expect(tree.getRoot()).to.be.undefined
    expect(tree.search(1)).to.be.undefined
    expect(tree.findPred(1)).to.be.undefined
    expect(tree.findSucc(1)).to.be.undefined
    expect(tree.findMax()).to.be.undefined
    expect(tree.findMin()).to.be.undefined
  })

  it('insert nodes', () => {
    tree.insert(33)
    expect(inOrderTraverse(tree)).to.deep.equal([33])
    tree.insert(16)
    expect(inOrderTraverse(tree)).to.deep.equal([16, 33])
    tree.insert(50)
    expect(inOrderTraverse(tree)).to.deep.equal([16, 33, 50])
    tree.insert(13)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 16, 33, 50])
    tree.insert(18)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 16, 18, 33, 50])
    tree.insert(34)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 16, 18, 33, 34, 50])
    tree.insert(58)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 16, 18, 33, 34, 50, 58])
    tree.insert(15)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 18, 33, 34, 50, 58])
    tree.insert(17)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 33, 34, 50, 58])
    tree.insert(25)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 25, 33, 34, 50, 58])
    tree.insert(51)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 25, 33, 34, 50, 51, 58])
    tree.insert(66)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 25, 33, 34, 50, 51, 58, 66])
    tree.insert(19)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 33, 34, 50, 51, 58, 66])
    tree.insert(27)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 33, 34, 50, 51, 58, 66])
    tree.insert(55)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 33, 34, 50, 51, 55, 58, 66])
  })

  it('remove nodes', () => {
    insertNodes([33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55], tree)
    tree.remove(33)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 34, 50, 51, 55, 58, 66])
    tree.remove(55)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 34, 50, 51, 58, 66])
    tree.remove(66)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 34, 50, 51, 58])
    tree.remove(58)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 16, 17, 18, 19, 25, 27, 34, 50, 51])
    tree.remove(16)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 17, 18, 19, 25, 27, 34, 50, 51])
    tree.remove(27)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 17, 18, 19, 25, 34, 50, 51])
    tree.remove(50)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 17, 18, 19, 25, 34, 51])
    tree.remove(19)
    expect(inOrderTraverse(tree)).to.deep.equal([13, 15, 17, 18, 25, 34, 51])
    tree.remove(13)
    expect(inOrderTraverse(tree)).to.deep.equal([15, 17, 18, 25, 34, 51])
    tree.remove(18)
    expect(inOrderTraverse(tree)).to.deep.equal([15, 17, 25, 34, 51])
    tree.remove(51)
    expect(inOrderTraverse(tree)).to.deep.equal([15, 17, 25, 34])
    tree.remove(34)
    expect(inOrderTraverse(tree)).to.deep.equal([15, 17, 25])
    tree.remove(25)
    expect(inOrderTraverse(tree)).to.deep.equal([15, 17])
    tree.remove(15)
    expect(inOrderTraverse(tree)).to.deep.equal([17])
    tree.remove(17)
    expect(inOrderTraverse(tree)).to.deep.equal([])
    tree.remove(100)
  })

  it('find max node', () => {
    insertNodes([33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55], tree)
    expect(tree.findMax().data).to.equal(66)
  })

  it('find min node', () => {
    insertNodes([33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55], tree)
    expect(tree.findMin().data).to.equal(13)
  })

  it('find pred node', () => {
    insertNodes([33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55], tree)
    expect(tree.findPred(33).data).to.equal(27)
    expect(tree.findPred(16).data).to.equal(15)
    expect(tree.findPred(50).data).to.equal(34)
    expect(tree.findPred(13)).to.equal(undefined)
    expect(tree.findPred(18).data).to.equal(17)
    expect(tree.findPred(34).data).to.equal(33)
    expect(tree.findPred(58).data).to.equal(55)
    expect(tree.findPred(15).data).to.equal(13)
    expect(tree.findPred(17).data).to.equal(16)
    expect(tree.findPred(25).data).to.equal(19)
    expect(tree.findPred(51).data).to.equal(50)
    expect(tree.findPred(66).data).to.equal(58)
    expect(tree.findPred(19).data).to.equal(18)
    expect(tree.findPred(27).data).to.equal(25)
    expect(tree.findPred(55).data).to.equal(51)
  })

  it('find succ node', () => {
    insertNodes([33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55], tree)
    expect(tree.findSucc(33).data).to.equal(34)
    expect(tree.findSucc(16).data).to.equal(17)
    expect(tree.findSucc(50).data).to.equal(51)
    expect(tree.findSucc(13).data).to.equal(15)
    expect(tree.findSucc(18).data).to.equal(19)
    expect(tree.findSucc(34).data).to.equal(50)
    expect(tree.findSucc(58).data).to.equal(66)
    expect(tree.findSucc(15).data).to.equal(16)
    expect(tree.findSucc(17).data).to.equal(18)
    expect(tree.findSucc(25).data).to.equal(27)
    expect(tree.findSucc(51).data).to.equal(55)
    expect(tree.findSucc(66)).to.equal(undefined)
    expect(tree.findSucc(19).data).to.equal(25)
    expect(tree.findSucc(27).data).to.equal(33)
    expect(tree.findSucc(55).data).to.equal(58)
  })
})
