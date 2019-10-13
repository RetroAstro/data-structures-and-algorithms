import { DoublyLinkedList } from '../linked-list/doubly-linked-list'

export class LinkedQueue<T> {
  private items: DoublyLinkedList<T>

  constructor() {
    this.items = new DoublyLinkedList<T>()
  }

  enqueue(data: T) {
    this.items.push(data)
  }

  dequeue() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(0)
  }

  peek() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.getHead().data
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  size() {
    return this.items.size()
  }

  clear() {
    this.items.clear()
  }
}
