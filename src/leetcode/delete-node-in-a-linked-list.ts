import { Node } from '../data-structures/linked-list/models'

export function deleteNode(node: Node<number>) {
  node.data = node.next.data
  node.next = node.next.next
}
