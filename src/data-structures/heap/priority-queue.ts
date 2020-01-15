import { MinHeap, MaxHeap } from './heap'

export class PriorityQueue<T> {
  heap: MinHeap<T> | MaxHeap<T>

  constructor(type: 'min' | 'max') {
    switch (type) {
      case 'min':
        this.heap = new MinHeap<T>()
        break
      case 'max':
        this.heap = new MaxHeap<T>()
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
