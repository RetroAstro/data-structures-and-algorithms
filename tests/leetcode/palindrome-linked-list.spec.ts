import { expect } from 'chai'
import { isPalindrome } from '../../src/leetcode/palindrome-linked-list'
import { getLinkedList } from './util'

describe('palindrome-linked-list', () => {
  it('should return true when is palindrome', () => {
    expect(isPalindrome(getLinkedList([1, 2, 3, 4, 5]).getHead())).to.be.false
    expect(isPalindrome(getLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]).getHead())).to.be.true
  })
})
