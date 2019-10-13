export class SequenceQueue<T> {
  private head: number = 0
  private tail: number = 0
  private items: { [key: number]: T } = {}

  enqueue(data: T) {
    this.items[this.tail] = data
    this.tail++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.head]
    delete this.items[this.head]
    this.head++
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
    return this.tail - this.head
  }

  clear() {
    this.head = 0
    this.tail = 0
    this.items = {}
  }
}
