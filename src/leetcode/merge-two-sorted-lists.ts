import { Node } from '../data-structures/linked-list/models'

export function mergeTwoLists<T extends Node<number>>(l1: T, l2: T) {
  if (l1 == null) {
    return l2
  }
  if (l2 == null) {
    return l1
  }

  if (l1.data < l2.data) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
