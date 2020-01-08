import { expect } from 'chai'
import { longestPalindrome } from '../../src/leetcode/longest-palindromic-substring'

describe('longest-palindromic-substring', () => {
  it('should return longest palindromic substring when giving strings', () => {
    expect(longestPalindrome('babad')).to.equal('bab')
    expect(longestPalindrome('cbbd')).to.equal('bb')
  })
})
