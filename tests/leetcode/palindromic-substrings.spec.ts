import { expect } from 'chai'
import { countSubstrings } from '../../src/leetcode/palindromic-substrings'

describe('palindromic-substrings', () => {
  it('should return palindromic count when giving strings', () => {
    expect(countSubstrings('abc')).to.equal(3)
    expect(countSubstrings('aaa')).to.equal(6)
  })
})
