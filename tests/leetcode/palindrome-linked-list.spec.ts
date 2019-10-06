import { expect } from 'chai'
import { isPalindrome } from '../../src/leetcode/palindrome-linked-list'
import { getLinkedList } from './util'

describe('palindrome-linked-list', () => {
  it('should return true when is palindrome', () => {
    let head = getLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]).getHead()
    expect(isPalindrome(head)).to.be.true
  })
})
