import { expect } from 'chai'
import { factorial } from '../../../src/data-structures/recursion/factorial'

describe('factorial', () => {
  it('recursive factorial', () => {
    expect(factorial(-1)).to.equal(undefined)
    expect(factorial(0)).to.equal(1)
    expect(factorial(1)).to.equal(1)
    expect(factorial(2)).to.equal(2)
    expect(factorial(3)).to.equal(6)
    expect(factorial(4)).to.equal(24)
    expect(factorial(5)).to.equal(120)
    expect(factorial(6)).to.equal(720)
  })
})
