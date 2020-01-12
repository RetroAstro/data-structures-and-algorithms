import { SequenceStack } from '../data-structures/stack/sequence-stack'

export class Queue<T> {
  private stackX: SequenceStack<T>
  private stackY: SequenceStack<T>

  constructor() {
    this.stackX = new SequenceStack<T>()
    this.stackY = new SequenceStack<T>()
  }

  enqueue(data: T) {
    this.stackX.push(data)
  }
  
  dequeue() {
    if (this.stackX.isEmpty()) {
      return undefined
    }
    while (this.stackX.size() > 0) {
      this.stackY.push(this.stackX.pop())
    }
    let result = this.stackY.pop()
    while (this.stackY.size() > 0) {
      this.stackX.push(this.stackY.pop())
    }
    return result
  }

  peek() {
    if (this.stackX.isEmpty()) {
      return undefined
    }
    while (this.stackX.size() > 0) {
      this.stackY.push(this.stackX.pop())
    }
    let result = this.stackY.peek()
    while (this.stackY.size() > 0) {
      this.stackX.push(this.stackY.pop())
    }
    return result
  }

  isEmpty() {
    return this.stackX.isEmpty()
  }

  size() {
    return this.stackX.size()
  }

  clear() {
    this.stackX.clear()
  }
}
