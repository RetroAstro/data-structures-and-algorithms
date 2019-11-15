import { expect } from 'chai'
import { FuzzySearch } from '../../../src/algorithms/search/fuzzy-search'

describe('fuzzy-search', () => {
  function createInstance(array: number[], target: number) {
    return new FuzzySearch(array, target)
  }

  it('work with empty array', () => {
    let instance = createInstance([], 1)
    expect(instance.firstEqual()).to.equal(-1)
    expect(instance.lastEqual()).to.equal(-1)
    expect(instance.firstGreaterThanOrEqual()).to.equal(-1)
    expect(instance.lastLessThanOrEqual()).to.equal(-1)
  })

  it('first equal', () => {
    let instance = createInstance([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 10], 8)
    expect(instance.firstEqual()).to.equal(7)
  })

  it('last equal', () => {
    let instance = createInstance([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 10], 8)
    expect(instance.lastEqual()).to.equal(9)
  })

  it('first greater than or equal', () => {
    let instance = createInstance([1, 2, 3, 4, 5, 6, 8, 9, 10], 7)
    expect(instance.firstGreaterThanOrEqual()).to.equal(6)
  })

  it('last less than or equal', () => {
    let instance = createInstance([1, 2, 3, 4, 5, 6, 8, 9, 10], 7)
    expect(instance.lastLessThanOrEqual()).to.equal(5)
  })
})
