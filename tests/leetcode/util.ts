import { Node } from '../../src/data-structures/linked-list/models'
import { SinglyLinkedList } from '../../src/data-structures/linked-list/singly-linked-list'

export function getLinkedList(array: number[]) {
  let list = new SinglyLinkedList<number>()
  array.forEach(item => list.push(item))
  return list
}

export function output(node: Node<number>) {
  let result = []
  while (node.next != null) {
    result.push(node.data)
    node = node.next
  }
  result.push(node.data)
  return result
}
