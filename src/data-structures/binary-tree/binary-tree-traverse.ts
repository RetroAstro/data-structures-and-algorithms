import { Node } from './node'
import { SequenceQueue } from '../queue/sequence-queue'

export class BinaryTreeTraverse<T> {
  queue: SequenceQueue<Node<T>>

  constructor(public tree: Node<T>) {
    this.queue = new SequenceQueue<Node<T>>()
  }

  preOrder(res: T[], node: Node<T> = this.tree) {
    if (node == null) return
    res.push(node.data)
    this.preOrder(res, node.left)
    this.preOrder(res, node.right)
  }

  inOrder(res: T[], node: Node<T> = this.tree) {
    if (node == null) return
    this.inOrder(res, node.left)
    res.push(node.data)
    this.inOrder(res, node.right)
  }

  postOrder(res: T[], node: Node<T> = this.tree) {
    if (node == null) return
    this.postOrder(res, node.left)
    this.postOrder(res, node.right)
    res.push(node.data)
  }

  levelOrder(res: T[], node: Node<T> = this.tree) {
    if (node == null) return
    this.queue.enqueue(node)
    while (!this.queue.isEmpty()) {
      let temp = this.queue.dequeue()
      res.push(temp.data)
      if (temp.left) {
        this.queue.enqueue(temp.left)
      }
      if (temp.right) {
        this.queue.enqueue(temp.right)
      }
    }
  }
}
