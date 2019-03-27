// 单链表
// 节点类、链表类
// 插入节点、删除节点、查找节点、显示全部节点
// fiber 中的单链表实现

export const HEAD: string = 'HEAD'

interface LinkNodeInterface {
   data: string
   next: LinkNodeInterface
}

class LinkNode implements LinkNodeInterface {
   data: string
   next: LinkNodeInterface
   constructor (data: string) {
      this.data = data
      this.next = null
   }
}

class List {
   private head: LinkNodeInterface
   constructor () {
      this.head = new LinkNode(HEAD)
   }
   insert (node: LinkNodeInterface, data: string):void {
      const target = this.find(data)
      node.next = target.next
      target.next = node
   }
   remove (data: string):void {
      if (data === HEAD) {
         console.log(`HEAD can't be removed !`)
         return
      }
      const target = this.findPrev(data)
      if (target.next) {
         target.next = target.next.next
      }
   }
   find (data: string):LinkNodeInterface {
      let current = this.head
      while (current && current.data !== data) {
         current = current.next
      }
      return current
   }
   findPrev (data: string):LinkNodeInterface {
      let current = this.head
      while (current && current.next && current.next.data !== data) {
         current = current.next
      }
      return current
   }
   display ():void {
      let current = this.head
      while (current.next) {
         console.log(current.next.data)
         current = current.next
      }
   }
}

let list = new List()
let node1 = new LinkNode('node1')
let node2 = new LinkNode('node2')
let node3 = new LinkNode('node3')

list.insert(node1, HEAD)
list.insert(node2, 'node1')
list.insert(node3, 'node2')
list.display() // node1 node2 node3
list.remove('node3')
list.display() // node1 node2 
list.remove('node1')
list.display() // node2

