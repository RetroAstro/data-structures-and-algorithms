import { Node, Parent } from './node'

type union = 'left' | 'right'

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
            current.right.parent = new Parent<T>(current, 'right')
            return
          }
          current = current.right
        } else {
          if (current.left == null) {
            current.left = new Node<T>(data)
            current.left.parent = new Parent<T>(current, 'left')
            return
          }
          current = current.left
        }
      }
    }
  }

  remove(data: T) {
    let node = this.search(data)
    if (node == null) {
      return
    }
    if (node.parent) {
      let path = node.parent.path as union
      // case1
      if (node.left == null && node.right == null) {
        node.parent.node[path] = null
        return
      }
      // case2
      if (node.left == null) {
        node.parent.node[path] = node.right
        node.right.parent = node.parent
        return
      } else if (node.right == null) {
        node.parent.node[path] = node.left
        node.left.parent = node.parent
        return
      }
    }
    // case3
    if (node.right) {
      let temp = this.findMin(node.right)
      node.data = temp.data
      temp.parent.node[temp.parent.path as union] = null
    } else {
      if (node.left && node.left.parent) {
        node.left.parent = null
      }
      this.root = node.left
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

  findPred(data: T) {
    let node = this.search(data)
    if (node == null) {
      return undefined
    }
    if (node.left || node.parent == null) {
      return this.findMax(node.left)
    }
    if (node.parent.path == 'right') {
      return node.parent.node
    } else {
      return this.findParent('right', node)
    }
  }

  findSucc(data: T) {
    let node = this.search(data)
    if (node == null) {
      return undefined
    }
    if (node.right || node.parent == null) {
      return this.findMin(node.right)
    }
    if (node.parent.path == 'left') {
      return node.parent.node
    } else {
      return this.findParent('left', node)
    }
  }

  getRoot() {
    return this.root
  }

  private findParent(path: string, node: Node<T>) {
    let current = node
    while (current && current.parent) {
      if (current.parent.path == path) {
        return current.parent.node
      }
      current = current.parent.node
    }
    return undefined
  }
}
