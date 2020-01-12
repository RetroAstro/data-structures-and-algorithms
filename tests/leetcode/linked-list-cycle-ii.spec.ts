import { expect } from 'chai'
import { detectCycle } from '../../src/leetcode/linked-list-cycle-ii'
import { getLinkedList } from './util'

describe('linked-list-cycle-ii', () => {
  it('should return null when no cycle', () => {
    let head = getLinkedList([3, 2, 0, -4]).getHead()
    expect(detectCycle(head)).to.be.null
  })

  it('should return correct node when giving linked-list-cycle', () => {
    let list = getLinkedList([3, 2, 0, -4])
    list.getNodeAt(3).next = list.getNodeAt(1)
    expect(detectCycle(list.getHead())).to.deep.equal(list.getNodeAt(1))
  })
})
