import { expect } from 'chai'
import { topKLargest } from '../../../src/data-structures/heap/topk-largest-elements-in-a-collection'
import { heapSort } from '../../../src/data-structures/heap/heap-sort'

describe('topk-largest-elements-in-a-collection', () => {
  it('should return topk largest elements in a collection when giving arrays', () => {
    let collection = new topKLargest<number>([33, 16, 13, 50], 3)
    expect(heapSort(collection.topK)).to.deep.equal([16, 33, 50])
    collection.add(18)
    expect(heapSort(collection.topK)).to.deep.equal([18, 33, 50])
    collection.add(34)
    expect(heapSort(collection.topK)).to.deep.equal([33, 34, 50])
    collection.add(58)
    expect(heapSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(15)
    expect(heapSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(17)
    expect(heapSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(25)
    expect(heapSort(collection.topK)).to.deep.equal([34, 50, 58])
    collection.add(51)
    expect(heapSort(collection.topK)).to.deep.equal([50, 51, 58])
    collection.add(66)
    expect(heapSort(collection.topK)).to.deep.equal([51, 58, 66])
    collection.add(19)
    expect(heapSort(collection.topK)).to.deep.equal([51, 58, 66])
  })
})
