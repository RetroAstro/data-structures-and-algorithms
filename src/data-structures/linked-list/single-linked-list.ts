import { Node } from './models'

export class SingleLinkedList<T> {
  protected count: number = 0
  protected head: Node<T> | undefined
  push(data: T) {
    let node = new Node(data)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  getNodeAt(index: number) {
    let node = this.head
    for (let i = 0; i < index && node != null; i++) {
      node = node.next
    }
    return node
  }
  insert(data: T, index: number) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(data)
      if (index === 0) {
        let current = this.head
        node.next = current
        this.head = node
      } else {
        let previous = this.getNodeAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  remove(data: T) {
    let index = this.indexOf(data)
    return this.removeAt(index)
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous = this.getNodeAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.data
    }
    return undefined
  }
  indexOf(data: T) {
    let current = this.head
    for (let i = 0; i < this.size() && current != null; i++) {
      if (data === current.data) {
        return i
      }
      current = current.next
    }
    return -1
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count
  }
  getHead() {
    return this.head
  }
  clear() {
    this.head = undefined
    this.count = 0
  }
}
