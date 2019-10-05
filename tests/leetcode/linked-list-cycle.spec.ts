import { expect } from 'chai'
import { hasCycle } from '../../src/leetcode/linked-list-cycle'
import { getLinkedList } from './util'

describe('linked-list-cycle', () => {
  it('should output false when list no cycle', () => {
    let head = getLinkedList([3, 2, 0, -4]).getHead()
    expect(hasCycle(head)).to.be.false
  })

  it('should output true when list has cycle', () => {
    let list = getLinkedList([3, 2, 0, -4])
    list.getNodeAt(3).next = list.getNodeAt(1)
    expect(hasCycle(list.getHead())).to.be.true
  })
})
