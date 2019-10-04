import { SinglyLinkedList } from './singly-linked-list'

export class SortedLinkedList<T> extends SinglyLinkedList<T> {
  push(data: T) {
    if (this.isEmpty()) {
      super.push(data)
    } else {
      let index = this.getIndexNextSortedData(data)
      super.insert(data, index)
    }
  }

  insert(data: T, index: number) {
    index = this.getIndexNextSortedData(data)
    return super.insert(data, index)
  }

  private getIndexNextSortedData(data: T) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current != null; i++) {
      if (data < current.data) {
        return i
      }
      current = current.next
    }
    return i
  }
}
