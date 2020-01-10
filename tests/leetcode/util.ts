import { Node } from '../../src/data-structures/linked-list/models'
import { SinglyLinkedList } from '../../src/data-structures/linked-list/singly-linked-list'

export function getLinkedList(array: number[]) {
  let result = new SinglyLinkedList<number>()
  array.forEach(item => result.push(item))
  return result
}

export function output(node: Node<number>) {
  let result = []
  while (node != null) {
    result.push(node.data)
    node = node.next
  }
  return result
}
