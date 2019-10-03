import { SinglyLinkedList } from './singly-linked-list'
import { DoublyNode } from './models'

export class DoublyLinkedList<T> extends SinglyLinkedList<T> {
  protected head: DoublyNode<T> | undefined
  protected tail: DoublyNode<T> | undefined
  push(data: T) {
    let node = new DoublyNode(data)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
  insert(data: T, index: number) {
    if (index >= 0 && index <= this.count) {
      let node = new DoublyNode(data)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          this.head.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        let previous = this.getNodeAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = this.head.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getNodeAt(index)
        let previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.data
    }
    return undefined
  }
  getTail() {
    return this.tail
  }
  clear() {
    super.clear()
    this.tail = undefined
  }
}