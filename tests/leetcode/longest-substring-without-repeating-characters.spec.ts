import { expect } from 'chai'
import { lengthOfLongestSubstring } from '../../src/leetcode/longest-substring-without-repeating-characters'

describe('longest-substring-without-repeating-characters', () => {
  it('should return longest substring without repeating characters when giving strings', () => {
    expect(lengthOfLongestSubstring('')).to.equal(0)
    expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3)
    expect(lengthOfLongestSubstring('bbbbb')).to.equal(1)
    expect(lengthOfLongestSubstring('pwwkew')).to.equal(3)
  })
})
