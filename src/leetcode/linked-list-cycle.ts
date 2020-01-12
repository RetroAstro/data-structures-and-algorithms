import { Node } from '../data-structures/linked-list/models'

type Map = { [key: number]: object }

export function hasCycle(head: Node<number>) {
  let current = head
  let map = <Map>{}

  while (current != null) {
    if (map[current.data] == current) {
      return true
    }
    map[current.data] = current
    current = current.next
  }

  return false
}
