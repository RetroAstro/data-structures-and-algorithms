import { expect } from 'chai'
import { decimalToBinary } from '../../../src/data-structures/stack/decimal-to-binary'

describe('decimal-to-binary', () => {
  it('should return binary strings when giving decimal numbers', () => {
    expect(decimalToBinary(1)).to.equal('1')
    expect(decimalToBinary(2)).to.equal('10')
    expect(decimalToBinary(233)).to.equal('11101001')
    expect(decimalToBinary(10)).to.equal('1010')
    expect(decimalToBinary(1000)).to.equal('1111101000')
  })
})
