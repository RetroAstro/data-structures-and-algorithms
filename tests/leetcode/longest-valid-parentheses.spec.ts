import { expect } from 'chai'
import { longestValidParentheses } from '../../src/leetcode/longest-valid-parentheses'

describe('longest-valid-parentheses', () => {
  it('should return longest valid parentheses when giving strings', () => {
    expect(longestValidParentheses('(()')).to.equal(2)
    expect(longestValidParentheses(')()())')).to.equal(4)
  })
})
