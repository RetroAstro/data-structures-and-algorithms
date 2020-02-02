import { swap } from '../../algorithms/sorting/swap'
import { Compare, Map, hof, reverseCompare } from './util'

export class MinHeap<T> {
  protected compareFn: (a: any, b: any) => Compare

  constructor(protected heap: T[] = [], func?: Map<T>) {
    this.compareFn = hof(func)
  }

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

  peek() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  getHeap() {
    return this.heap
  }

  siftUp(index: number) {
    let parent = this.getParentIndex(index)
    if (index > 0 && this.compareFn(this.heap[index], this.heap[parent]) === Compare.lt) {
      swap(this.heap, parent, index)
      this.siftUp(parent)
    }
  }

  siftDown(index: number) {
    let temp = index
    let left = this.getLeftIndex(index)
    let right = this.getRightIndex(index)
    if (left < this.size() && this.compareFn(this.heap[temp], this.heap[left]) === Compare.gt) {
      temp = left
    }
    if (right < this.size() && this.compareFn(this.heap[temp], this.heap[right]) === Compare.gt) {
      temp = right
    }
    if (temp !== index) {
      swap(this.heap, temp, index)
      this.siftDown(temp)
    }
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
  constructor(protected heap: T[] = [], func?: Map<T>) {
    super(heap, func)
    this.compareFn = reverseCompare(hof(func))
  }
}
