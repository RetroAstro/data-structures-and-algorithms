export class SequenceDeque<T> {
  private head: number = 0
  private tail: number = 0
  private items: { [key: number]: T } = {}

  addFront(data: T) {
    if (this.isEmpty()) {
      this.addBack(data)
    } else if (this.head > 0) {
      this.head--
      this.items[this.head] = data
    } else {
      for (let i = this.tail; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.tail++
      this.items[0] = data
    }
  }

  addBack(data: T) {
    this.items[this.tail] = data
    this.tail++
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return result
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.tail--
    let result = this.items[this.tail]
    delete this.items[this.tail]
    return result
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.head]
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.tail - 1]
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
