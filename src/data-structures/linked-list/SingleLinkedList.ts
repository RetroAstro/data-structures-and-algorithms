export const HEAD: string = 'HEAD'

interface LinkedNodeInterface {
   data: string
   next: LinkedNodeInterface
}

class LinkedNode implements LinkedNodeInterface {
   data: string
   next: LinkedNodeInterface
   constructor (data: string) {
      this.data = data
      this.next = null
   }
}

class LinkedList {
   private head: LinkedNodeInterface
   constructor () {
      this.head = new LinkedNode(HEAD)
   }
   insert (node: LinkedNodeInterface, data: string) {
      let target = this.find(data)

      node.next = target.next
      target.next = node
   }
   remove (data: string) {
      if (data === HEAD) {
         console.log(`HEAD can't be removed !`)
         return
      }

      let target = this.findPrev(data)

      if (target.next) {
         target.next = target.next.next
      }
   }
   find (data: string):LinkedNodeInterface {
      let current = this.head

      while (current && current.data !== data) {
         current = current.next
      }

      return current
   }
   findPrev (data: string):LinkedNodeInterface {
      let current = this.head

      while (current && current.next && current.next.data !== data) {
         current = current.next
      }

      return current
   }
   display () {
      let current = this.head

      while (current.next) {
         console.log(current.next.data)
         current = current.next
      }
   }
}

let list = new LinkedList()
let node1 = new LinkedNode('node1')
let node2 = new LinkedNode('node2')
let node3 = new LinkedNode('node3')

list.insert(node1, HEAD)
list.insert(node2, 'node1')
list.insert(node3, 'node2')
list.display() // node1 node2 node3
list.remove('node3')
list.display() // node1 node2
list.remove('node1')
list.display() // node2
