import { Node } from '../data-structures/linked-list/models'

export function reverseList(head: Node<number>) {
  let current = head
  let list = []
  let i = 0

  while (current.next != null) {
    let node = factory(current.data)
    if (i > 0) {
      node.next = list[i - 1]
    }
    list.push(node)
    i++
    current = current.next
  }

  let res = factory(current.data)
  res.next = list[list.length - 1]
  return res
  
  function factory<T>(data: T): Node<T> {
    return { data, next: null }
  }
}
