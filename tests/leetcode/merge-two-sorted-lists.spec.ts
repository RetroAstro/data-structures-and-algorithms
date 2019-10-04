import { expect } from 'chai'
import { mergeTwoLists } from '../../src/leetcode/merge-two-sorted-lists'
import { getLinkedList, output } from './util'

describe('merge-two-sorted-lists', () => {
  it('should output 1->1->2->3->4->4 when input 1->2->4, 1->3->4', () => {
    let l1 = getLinkedList([1, 2, 4]).getHead()
    let l2 = getLinkedList([1, 3, 4]).getHead()
    expect(output(mergeTwoLists(l1, l2))).to.deep.equal([1, 1, 2, 3, 4, 4])
  })
})
