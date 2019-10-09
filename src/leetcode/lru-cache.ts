import { DoublyNode } from '../data-structures/linked-list/models'

class DoublyLinkedList<T> {
  private head: DoublyNode<T> | any
  private tail: DoublyNode<T> | any

  constructor(private count: number = 0) {
    this.head = { data: '', prev: '', next: '' }
    this.tail = { data: '', prev: '', next: '' }
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  
  push(data: T) {
    let node = new DoublyNode<T>(data)
    let previous = this.tail.prev
    node.next = this.tail
    previous.next = node
    this.tail.prev = node
    node.prev = previous
    this.count++
    return node
  }

  removeNode(node: DoublyNode<T>) {
    let previous = node.prev
    previous.next = node.next
    node.next.prev = previous
    this.count--
  }

  size() {
    return this.count
  }

  getHead() {
    return this.head
  }
}

export class LRUCache<T> {
  private list: DoublyLinkedList<T>
  private map: { [key: number]: DoublyNode<T> } = {}
  
  constructor(private capacity: T) {
    this.list = new DoublyLinkedList<T>()
  }

  get(key: any) {
    if (this.map[key]) {
      this.list.removeNode(this.map[key])
      let node: any = this.list.push(this.map[key].data)
      this.map[key] = node
      return node.data.value
    }
    return -1
  }

  put(key: any, value: any) {
    if (this.map[key]) {
      this.list.removeNode(this.map[key])
    } else {
      if (
        (this.list.size() as any) === this.capacity
      ) {
        let next = this.list.getHead().next
        this.list.removeNode(next)
        delete this.map[next.data.key]
      }
    }
    let item: any = { key, value }
    let node = this.list.push(item)
    this.map[key] = node
  }
}
