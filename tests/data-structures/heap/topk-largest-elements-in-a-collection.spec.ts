import { expect } from 'chai'
import { topKLargest } from '../../../src/data-structures/heap/topk-largest-elements-in-a-collection'
import { quickSort } from '../../../src/algorithms/sorting/quick-sort'

describe('topk-largest-elements-in-a-collection', () => {
  it('should return topk largest elements in a collection when giving arrays', () => {
    let collection = new topKLargest<number>([33, 16, 13, 50], 3)
    expect(quickSort(collection.topK)).to.deep.equal([16, 33, 50])
    collection.add(18)
    expect(quickSort(collection.topK)).to.deep.equal([18, 33, 50])
    collection.add(34)
    expect(quickSort(collection.topK)).to.deep.equal([33, 34, 50])
    collection.add(58)
    expect(quickSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(15)
    expect(quickSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(17)
    expect(quickSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(25)
    expect(quickSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(51)
    expect(quickSort(collection.topK)).to.deep.equal([50, 51, 58])
    collection.add(66)
    expect(quickSort(collection.topK)).to.deep.equal([51, 58, 66])
    collection.add(19)
    expect(quickSort(collection.topK)).to.deep.equal([51, 58, 66])
  })
})
