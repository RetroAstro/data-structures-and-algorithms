export class CircularQueue<T> {
  private head: number = 0
  private tail: number = 0
  private items: { [key: number]: T } = {}
  private capacity: number

  constructor(n: number) {
    this.capacity = n + 1
  }

  enqueue(data: T) {
    if (
      (this.tail + 1) % this.capacity === this.head
    ) {
      return false
    }
    this.items[this.tail] = data
    this.tail = (this.tail + 1) % this.capacity
    return true
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.head]
    delete this.items[this.head]
    this.head = (this.head + 1) % this.capacity
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.head]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    if (this.tail >= this.head) {
      return this.tail - this.head
    }
    return (this.capacity - this.head) + this.tail
  }

  clear() {
    this.head = 0
    this.tail = 0
    this.items = {}
  }
}
