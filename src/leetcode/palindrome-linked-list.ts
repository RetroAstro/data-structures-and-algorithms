import { Node } from '../data-structures/linked-list/models'

export function isPalindrome(head: Node<number>) {
  let current = head
  let list = []

  while (current.next != null) {
    list.push(current.data)
    current = current.next
  }

  list.push(current.data)
  
  return [...list].reverse().join('') === list.join('')
}
