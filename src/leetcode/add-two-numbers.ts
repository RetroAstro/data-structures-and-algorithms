import { Node } from '../data-structures/linked-list/models'

export function addTwoNumbers<T extends Node<number>>(l1: T, l2: T) {
  let prev = new Node<number>(0)
  let curr = prev
  let carry = 0
  while (l1 != null || l2 != null) {
    let x = l1 == null ? 0 : l1.data
    let y = l2 == null ? 0 : l2.data
    let sum = x + y + carry
    carry = sum / 10 >= 1 ? 1 : 0
    sum = sum % 10
    curr.next = new Node<number>(sum)
    curr = curr.next
    if (l1) {
      l1 = l1.next as T
    }
    if (l2) {
      l2 = l2.next as T
    }
  }
  if (carry == 1) {
    curr.next = new Node<number>(carry)
  }
  return prev.next
}
