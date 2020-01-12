import { Node } from '../data-structures/linked-list/models'

export function detectCycle<T>(head: Node<T>) {
  let slow = head
  let fast = head
  let start = head

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      while (slow != start) {
        slow = slow.next
        start = start.next
      }
      return slow
    }
  }
  
  return null
}
