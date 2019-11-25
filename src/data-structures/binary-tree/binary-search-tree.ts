import { Node } from './node'

export class BinarySearchTree<T> {
  private root: Node<T>

  insert(data: T) {
    if (this.root == null) {
      this.root = new Node<T>(data)
    } else {
      let current = this.root
      while (current) {
        if (data > current.data) {
          if (current.right == null) {
            current.right = new Node<T>(data)
            return
          }
          current = current.right
        } else {
          if (current.left == null) {
            current.left = new Node<T>(data)
            return
          }
          current = current.left
        }
      }
    }
  }

  remove(data: T, node: Node<T> = this.root) {
    if (node == null) {
      return null
    }
    if (data > node.data) {
      node.right = this.remove(data, node.right)
      return node
    } else if (data < node.data) {
      node.left = this.remove(data, node.left)
      return node
    } else {
      // case1
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // case2
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }
      // case3
      let temp = this.findMin(node.right)
      node.data = temp.data
      node.right = this.remove(temp.data, node.right)
      return node
    }
  }

  search(data: T) {
    let current = this.root
    while (current) {
      if (data > current.data) {
        current = current.right
      } else if (data < current.data) {
        current = current.left
      } else {
        return current
      }
    }
    return undefined
  }

  findMax(node: Node<T> = this.root) {
    let current = node
    while (current && current.right != null) {
      current = current.right
    }
    return current
  }

  findMin(node: Node<T> = this.root) {
    let current = node
    while (current && current.left != null) {
      current = current.left
    }
    return current
  }

  findPred() {

  }

  findSucc() {

  }
}
