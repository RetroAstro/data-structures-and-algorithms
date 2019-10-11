import { DoublyLinkedList } from '../linked-list/doubly-linked-list'

export class LinkedStack<T> {
  private items: DoublyLinkedList<T>

  constructor() {
    this.items = new DoublyLinkedList<T>()
  }
  
  push(data: T) {
    this.items.push(data)
  }

  pop() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.items.size() - 1)
  }

  peek() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.getTail().data
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
