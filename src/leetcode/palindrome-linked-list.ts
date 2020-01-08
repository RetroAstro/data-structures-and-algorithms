import { Node } from '../data-structures/linked-list/models'

export function isPalindrome(head: Node<number>) {
  let current = head
  let arr = []

  while (current != null) {
    arr.push(current.data)
    current = current.next
  }

  let i = 0
  let j = arr.length - 1
  
  while (i < j) {
    if (arr[i] == arr[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}
