import { MinHeap } from './heap'
import { heapify } from './heapify'

export class topKLargest<T> {
  private heap: MinHeap<T>

  constructor(nums: T[], private k: number) {
    this.initTopK(nums)
  }

  get topK() {
    return this.heap.getHeap()
  }

  add(data: T) {
    if (data > this.heap.peek()) {
      this.heap.extract()
      this.heap.insert(data)
    }
  }

  private initTopK(nums: T[]) {
    let heap = nums.slice(0, this.k)
    this.buildMinHeap(heap)
    this.heap = new MinHeap<T>(heap)

    for (let i = this.k; i < nums.length; i++) {
      if (nums[i] > this.heap.peek()) {
        this.heap.extract()
        this.heap.insert(nums[i])
      }
    }
  }

  private buildMinHeap(array: T[]) {
    let maxIndex = Math.floor(array.length / 2)
    for (let i = maxIndex; i >= 0; i--) {
      heapify(array, i, array.length, (a: T, b: T) => a > b)
    }
  }
}
