import { Node } from '../data-structures/linked-list/models'
import { mergeTwoLists } from './merge-two-sorted-lists'

export function mergeKLists<T>(lists: Node<T>[]) {
  if (lists.length == 0) {
    return null
  }
  
  return merge(0, lists.length - 1)

  function merge(left: number, right: number): any {
    if (left == right) {
      return lists[left]
    }

    let mid = (left + right) >> 1
    let l1 = merge(left, mid)
    let l2 = merge(mid + 1, right)

    return mergeTwoLists(l1, l2)
  }
}
