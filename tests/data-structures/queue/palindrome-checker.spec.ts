import { expect } from 'chai'
import { palindromeChecker } from '../../../src/data-structures/queue/palindrome-checker'

describe('palindrome-checker', () => {
  it('check true or false', () => {
    expect(palindromeChecker(null)).to.be.false
    expect(palindromeChecker('')).to.be.false
    expect(palindromeChecker('a')).to.be.true
    expect(palindromeChecker('aa')).to.be.true
    expect(palindromeChecker('aba')).to.be.true
    expect(palindromeChecker('ab')).to.be.false
    expect(palindromeChecker('kayak')).to.be.true
    expect(palindromeChecker('radar')).to.be.true
    expect(palindromeChecker('level')).to.be.true
    expect(palindromeChecker('Was it a car or a cat I saw')).to.be.true
    expect(palindromeChecker('Step on no pets')).to.be.true
    expect(palindromeChecker('Able was I ere I saw Elba')).to.be.true
  })
})
