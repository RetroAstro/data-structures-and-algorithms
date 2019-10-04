import { SinglyLinkedList } from './singly-linked-list'
import { Node } from './models'

export class CircularLinkedList<T> extends SinglyLinkedList<T> {
  push(data: T) {
    let node = new Node(data)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.getNodeAt(this.size() - 1)
      current.next = node
    }
    node.next = this.head
    this.count++
  }

  insert(data: T, index: number) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(data)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getNodeAt(this.size() - 1)
          this.head = node
          current.next = this.head
        }
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

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          let removed = this.head
          current = this.getNodeAt(this.size() - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
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
}
