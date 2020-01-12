import { SequenceQueue } from '../data-structures/queue/sequence-queue'

export class Stack<T> {
  private queue: SequenceQueue<T>

  constructor() {
    this.queue = new SequenceQueue<T>()
  }

  push(data: T) {
    this.queue.enqueue(data)
  }

  pop() {
    if (this.queue.isEmpty()) {
      return undefined
    }
    let mids: T[] = []
    while (this.queue.size() > 1) {
      mids.push(this.queue.dequeue())
    }
    let result = this.queue.dequeue()
    mids.forEach(item => this.queue.enqueue(item))
    return result
  }

  peek() {
    if (this.queue.isEmpty()) {
      return undefined
    }
    let result: T
    let mids: T[] = []
    while (this.queue.size() > 0) {
      if (this.queue.size() === 1) {
        result = this.queue.peek()
      }
      mids.push(this.queue.dequeue())
    }
    mids.forEach(item => this.queue.enqueue(item))
    return result
  }

  isEmpty() {
    return this.queue.isEmpty()
  }

  size() {
    return this.queue.size()
  }

  clear() {
    this.queue.clear()
  }
}
