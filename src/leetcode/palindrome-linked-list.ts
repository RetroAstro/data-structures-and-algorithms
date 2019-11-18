import { Node } from '../data-structures/linked-list/models'

export function isPalindrome(head: Node<number>) {
  let current = head
  let list = []

  while (current != null) {
    list.push(current.data)
    current = current.next
  }

  return [...list].reverse().join('') === list.join('')
}
