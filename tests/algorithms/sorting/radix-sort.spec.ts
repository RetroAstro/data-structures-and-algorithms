import { expect } from 'chai'
import { radixSort } from '../../../src/algorithms/sorting/radix-sort'
import { testSortAlgorithm } from './sort-algorithm-tests'

describe('radix-sort', () => {
  it('should return sorted array when giving unsorted array', () => {
    expect(radixSort([53, 3, 542, 748, 14, 214, 154, 63, 616])).to.deep.equal([3, 14, 53, 63, 154, 214, 542, 616, 748])
  })
  
  testSortAlgorithm(radixSort, 'regular-sort-test')
})
