import { expect } from 'chai'
import { addTwoNumbers } from '../../src/leetcode/add-two-numbers'
import { getLinkedList, output } from './util'

describe('add-two-numbers', () => {
  it('should return correct answer when add two numbers', () => {
    let l1 = getLinkedList([2, 4, 3]).getHead()
    let l2 = getLinkedList([5, 6, 4]).getHead()
    let l3 = getLinkedList([7, 8, 9]).getHead()
    let l4 = getLinkedList([3, 2]).getHead()
    expect(output(addTwoNumbers(l1, l2))).to.deep.equal([7, 0, 8])
    expect(output(addTwoNumbers(l3, l4))).to.deep.equal([0, 1, 0, 1])
    expect(output(addTwoNumbers(l4, l3))).to.deep.equal([0, 1, 0, 1])
  })
})
