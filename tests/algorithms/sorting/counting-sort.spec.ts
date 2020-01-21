import { expect } from 'chai'
import { countingSort } from '../../../src/algorithms/sorting/counting-sort'
import { testSortAlgorithm } from './sort-algorithm-tests'

describe('counting-sort', () => {
  it('should return sorted array when giving unsorted array', () => {
    expect(countingSort([2, 5, 3, 0, 2, 3, 0, 3])).to.deep.equal([0, 0, 2, 2, 3, 3, 3, 5])
  })

  testSortAlgorithm(countingSort, 'regular-sort-test')
})
