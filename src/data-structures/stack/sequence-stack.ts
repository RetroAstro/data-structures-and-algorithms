export class SequenceStack<T> {
  private count: number = 0
  private items: { [key: number]: T } = {}

  push(data: T) {
    this.items[this.count] = data
    this.count++
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    this.count = 0
    this.items = {}
  }
}
