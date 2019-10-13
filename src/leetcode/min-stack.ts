import { SequenceStack } from '../data-structures/stack/sequence-stack'

export class MinStack<T> {
  private count: number = 0
  private items: { [key: number]: T } = {}
  private stack: SequenceStack<T>

  constructor() {
    this.stack = new SequenceStack<T>()
  }

  push(data: T) {
    this.items[this.count] = data
    this.count++
    this.put(data)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    this.take(result)
    return result
  }

  top() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  getMin() {
    return this.stack.peek()
  }

  isEmpty() {
    return this.count === 0
  }

  private put(data: T) {
    if (this.stack.isEmpty()) {
      this.stack.push(data)
    } else {
      data <= this.stack.peek() ? this.stack.push(data) : null
    }
  }

  private take(data: T) {
    if (data === this.stack.peek()) {
      this.stack.pop()
    }
  }
}
