import { expect } from 'chai'
import { letterCombinations } from '../../src/leetcode/letter-combinations-of-a-phone-number'

describe('letter-combinations-of-a-phone-number', () => {
  it('should return letter combinations when giving a phone number', () => {
    expect(letterCombinations('')).to.deep.equal([])
    expect(letterCombinations('23')).to.deep.equal(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })
})
