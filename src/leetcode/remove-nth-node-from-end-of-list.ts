import { Node } from '../data-structures/linked-list/models'

export function removeNthFromEnd<T>(head: Node<T>, n: number) {
  let curr = head
  let arr = []

  while (curr != null) {
    arr.push(curr)
    curr = curr.next
  }

  let node = arr[arr.length - n - 1]
  
  if (node) {
    node.next = node.next.next
  } else {
    head = head.next
  }
  return head
}
