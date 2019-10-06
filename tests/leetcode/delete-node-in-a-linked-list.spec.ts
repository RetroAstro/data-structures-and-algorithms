import { expect } from 'chai'
import { deleteNode } from '../../src/leetcode/delete-node-in-a-linked-list'
import { getLinkedList, output } from './util'

describe('delete-node-in-a-linked-list', () => {
  it('should delete node at right position', () => {
    let list = getLinkedList([4, 5, 1, 9])
    deleteNode(list.getNodeAt(1))
    expect(output(list.getHead())).to.deep.equal([4, 1, 9])
  })
})
