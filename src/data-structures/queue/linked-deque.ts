import { DoublyLinkedList } from '../linked-list/doubly-linked-list'

export class LinkedDeque<T> {
  private items: DoublyLinkedList<T>

  constructor() {
    this.items = new DoublyLinkedList<T>()
  }

  addFront(data: T) {
    this.items.insert(data, 0)
  }

  addBack(data: T) {
    this.items.push(data)
  }

  removeFront() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(0)
  }

  removeBack() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.items.size() - 1)
  }

  peekFront() {
    if (this.items.isEmpty()) {
      return undefined
    }
    return this.items.getHead().data
  }

  peekBack() {
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
