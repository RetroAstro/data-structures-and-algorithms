import { expect } from 'chai'
import { reverseList } from '../../src/leetcode/reverse-linked-list'
import { getLinkedList, output } from './util'

describe('reverse-linked-list', () => {
  it('should output 5->4->3->2->1->null when input 1->2->3->4->5->null', () => {
    let head = getLinkedList([1, 2, 3, 4, 5]).getHead()
    expect(output(reverseList(head))).to.deep.equal([5, 4, 3, 2, 1])
  })
})
