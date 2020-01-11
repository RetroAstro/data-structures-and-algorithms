import { expect } from 'chai'
import { generateParenthesis } from '../../src/leetcode/generate-parentheses'

describe('generate-parentheses', () => {
  it('should return all valid parentheses when giving n', () => {
    expect(generateParenthesis(3)).to.deep.equal([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ])
  })
})
