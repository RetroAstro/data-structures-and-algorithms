import { expect } from 'chai'
import { fibonacci } from '../../../src/data-structures/recursion/fibonacci'

describe('fibonacci', () => {
  it('should return correct fibonacci number', () => {
    expect(fibonacci(0)).to.equal(0)
    expect(fibonacci(1)).to.equal(1)
    expect(fibonacci(2)).to.equal(1)
    expect(fibonacci(3)).to.equal(2)
    expect(fibonacci(4)).to.equal(3)
    expect(fibonacci(5)).to.equal(5)
    expect(fibonacci(6)).to.equal(8)
    expect(fibonacci(7)).to.equal(13)
    expect(fibonacci(8)).to.equal(21)
    expect(fibonacci(9)).to.equal(34)
    expect(fibonacci(10)).to.equal(55)
    expect(fibonacci(11)).to.equal(89)
    expect(fibonacci(12)).to.equal(144)
    expect(fibonacci(13)).to.equal(233)
    expect(fibonacci(14)).to.equal(377)
    expect(fibonacci(15)).to.equal(610)
    expect(fibonacci(16)).to.equal(987)
    expect(fibonacci(17)).to.equal(1597)
    expect(fibonacci(18)).to.equal(2584)
    expect(fibonacci(19)).to.equal(4181)
    expect(fibonacci(20)).to.equal(6765)
  })
})
