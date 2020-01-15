import { MinHeap, MaxHeap } from './heap'
import { Map } from './util'

export class PriorityQueue<T> {
  heap: MinHeap<T> | MaxHeap<T>

  constructor(type: 'min' | 'max', intial?: T[], func?: Map<T>) {
    switch (type) {
      case 'min':
        this.heap = new MinHeap<T>(intial, func)
        break
      case 'max':
        this.heap = new MaxHeap<T>(intial, func)
        break
      default:
        throw 'Invalid Type !'
    }
  }
  
  add(data: T) {
    this.heap.insert(data)
  }

  remove() {
    return this.heap.extract()
  }

  peek() {
    return this.heap.getTopElement()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }

  clear() {
    this.heap.clear()
  }
}
