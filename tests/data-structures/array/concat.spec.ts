import { expect } from 'chai'
import { concatContainer } from '../../../src/data-structures/array/concat'

describe('concat', () => {
  it('should concat two arrays', () => {
    let container = new concatContainer([1, 2])
    expect(container.concat([3, 4])).to.deep.equal([1, 2, 3, 4])
  })

  it('should concat three arrays', () => {
    let container = new concatContainer([1, 2])
    expect(container.concat([3, 4], [5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('should concat value to arrays', () => {
    let container = new concatContainer([1, 2])
    expect(container.concat('a', [5, 6])).to.deep.equal([1, 2, 'a', 5, 6])
  })

  it('should concat nested arrays', () => {
    let container = new concatContainer([[1]])
    expect(container.concat(4, [5, [6]])).to.deep.equal([[1], 4, 5, [6]])
  })

  it('should equal to [] when all empty arrays', () => {
    let container = new concatContainer([])
    expect(container.concat([])).to.deep.equal([])
  })

  it('should throw when not an array', () => {
    function test() {
      let container = new concatContainer(2333)
      container.concat([])
    }
    expect(test).to.throw('can not accept invalid type expect array !')
  })
})
