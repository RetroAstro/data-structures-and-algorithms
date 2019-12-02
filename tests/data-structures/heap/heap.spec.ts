import { expect } from 'chai'
import { MinHeap, MaxHeap } from '../../../src/data-structures/heap/heap'

describe('heap', () => {
  let minheap: MinHeap<number>
  let maxheap: MaxHeap<number>

  beforeEach(() => {
    minheap = new MinHeap<number>()
    maxheap = new MaxHeap<number>()
  })

  it('start empty', () => {
    expect(minheap.size()).to.equal(0)
    expect(minheap.isEmpty()).to.equal(true)
    expect(minheap.insert(undefined)).to.equal(false)
    expect(minheap.extract()).to.equal(undefined)
    expect(minheap.getTopElement()).to.equal(undefined)
    expect(maxheap.size()).to.equal(0)
    expect(maxheap.isEmpty()).to.equal(true)
    expect(maxheap.insert(undefined)).to.equal(false)
    expect(maxheap.extract()).to.equal(undefined)
    expect(maxheap.getTopElement()).to.equal(undefined)
  })

  it('insert values into heap', () => {
    let res1 = []
    for (let i = 1; i <= 10; i++) {
      res1.push(i)
      minheap.insert(i)
      expect(minheap.getHeap()).to.deep.equal(res1)
    }
    let res2 = []
    for (let i = 10; i >= 1; i--) {
      res2.push(i)
      maxheap.insert(i)
      expect(maxheap.getHeap()).to.deep.equal(res2)
    }
  })

  it('extract top element in heap', () => {
    for (let i = 1; i < 10; i++) {
      minheap.insert(i)
    }
    let res1 = [
      [],
      [2, 4, 3, 8, 5, 6, 7, 9],
      [3, 4, 6, 8, 5, 9, 7],
      [4, 5, 6, 8, 7, 9],
      [5, 7, 6, 8, 9],
      [6, 7, 9, 8],
      [7, 8, 9],
      [8, 9],
      [9],
      []
    ]
    for (let i = 1; i < 10; i++) {
      expect(minheap.extract()).to.equal(i)
      expect(minheap.getHeap()).to.deep.equal(res1[i])
    }
    for (let i = 10; i >= 1; i--) {
      maxheap.insert(i)
    }
    let res2 = [
      [],
      [],
      [1],
      [2, 1],
      [3, 1, 2],
      [4, 3, 2, 1],
      [5, 4, 2, 3, 1],
      [6, 4, 5, 3, 1, 2],
      [7, 6, 5, 3, 1, 2, 4],
      [8, 7, 5, 3, 6, 2, 4, 1],
      [9, 7, 8, 3, 6, 5, 4, 1, 2]
    ]
    for (let i = 10; i >= 1; i--) {
      expect(maxheap.extract()).to.equal(i)
      expect(maxheap.getHeap()).to.deep.equal(res2[i])
    }
  })

  it('get top element in heap', () => {
    for (let i = 10; i >= 1; i--) {
      minheap.insert(i)
      expect(minheap.getTopElement()).to.equal(i)
    }
    for (let i = 1; i <= 10; i++) {
      maxheap.insert(i)
      expect(maxheap.getTopElement()).to.equal(i)
    }
  })

  it('clear heap', () => {
    minheap.insert(1)
    expect(minheap.getHeap()).to.deep.equal([1])
    minheap.clear()
    expect(minheap.getHeap()).to.deep.equal([])
    maxheap.insert(2)
    expect(maxheap.getHeap()).to.deep.equal([2])
    maxheap.clear()
    expect(maxheap.getHeap()).to.deep.equal([])
  })
})
