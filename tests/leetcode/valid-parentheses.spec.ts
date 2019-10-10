import { expect } from 'chai'
import { isValid } from '../../src/leetcode/valid-parentheses'

describe('valid-parentheses', () => {
  it('should return true when valid', () => {
    let s = '()[]{}'
    expect(isValid(s)).to.be.true
  })
})
