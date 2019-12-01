import { swap } from '../../algorithms/sorting/swap'
import { Compare, compare, reverseCompare } from './util'

export class MinHeap<T> {
  private heap: T[] = []

  constructor(protected compareFn = compare) {}

  insert(data: T) {
    if (data) {
      let index = this.heap.length
      this.heap.push(data)
      this.siftUp(index)
      return true
    }
    return false
  }

  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    let removed = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removed
  }

  getTopElement() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  siftUp(index: number) {
    let parent = this.getParentIndex(index)
    if (index > 0 && compare(this.heap[index], this.heap[parent]) === Compare.lt) {
      swap(this.heap, parent, index)
      this.siftUp(parent)
    }
  }

  siftDown(index: number) {
    let left = this.getLeftIndex(index)
    let right = this.getRightIndex(index)
    let temp = compare(this.heap[left], this.heap[right]) === Compare.lt ? left : right
    if (right < this.size() && compare(this.heap[temp], this.heap[index]) === Compare.lt) {
      swap(this.heap, temp, index)
      this.siftDown(temp)
    }
  }

  heapify(array: T[]) {
    this.heap = array
    let maxIndex = Math.floor(this.size() / 2) - 1
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i)
    }
    return this.heap
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.heap.length
  }

  clear() {
    this.heap = []
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1
  }

  private getRightIndex(index: number) {
    return 2 * index + 2
  }

  private getParentIndex(index: number) {
    return index === 0 ? undefined : Math.floor((index - 1) / 2)
  }
}

export class MaxHeap<T> extends MinHeap<T> {
  constructor(protected compareFn = compare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
