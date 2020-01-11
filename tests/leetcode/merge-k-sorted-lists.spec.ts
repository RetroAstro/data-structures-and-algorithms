import { expect } from 'chai'
import { mergeKLists } from '../../src/leetcode/merge-k-sorted-lists'
import { getLinkedList, output } from './util'

describe('merge-k-sorted-lists', () => {
  it('should return single sorted list when giving k sorted lists', () => {
    expect(mergeKLists([])).to.equal(null)
    expect(output(mergeKLists([
      getLinkedList([1, 4, 5]).getHead(),
      getLinkedList([1, 3, 4]).getHead(),
      getLinkedList([2, 6]).getHead()
    ]))).to.deep.equal([1, 1, 2, 3, 4, 4, 5, 6])
  })
})
