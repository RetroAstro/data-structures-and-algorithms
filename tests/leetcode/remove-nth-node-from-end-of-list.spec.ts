import { expect } from 'chai'
import { removeNthFromEnd } from '../../src/leetcode/remove-nth-node-from-end-of-list'
import { getLinkedList, output } from './util'

describe('remove-nth-node-from-end-of-list', () => {
  it('should remove nth node from end of list when giving a linked list', () => {
    expect(output(removeNthFromEnd(getLinkedList([1]).getHead(), 1))).to.deep.equal([])
    expect(output(removeNthFromEnd(getLinkedList([1, 2, 3, 4, 5]).getHead(), 2))).to.deep.equal([1, 2, 3, 5])
  })
})
