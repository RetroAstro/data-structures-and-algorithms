import { Node } from '../data-structures/binary-tree/node'

const methods = {
  iteration: isSymmetricIterative,
  recursion: isSymmetricRecursive
}

export function isSymmetric(type: keyof typeof methods) {
  return methods[type]
}

type payload<T> = {
  key: 'left' | 'right'
  node: Node<T>,
  parent: Node<T>
}

function isSymmetricIterative<T>(root: Node<T>) {
  if (!root) return true
  let queue = [root]
  while (queue.length) {
    let temp = [] as payload<T>[]
    while (queue.length) {
      let node = queue.shift()
      if (node.left) {
        temp.push({ key: 'left', node: node.left, parent: node })
      }
      if (node.right) {
        temp.push({ key: 'right', node: node.right, parent: node })
      }
    }
    if (temp.length % 2 == 0) {
      let i = 0, j = temp.length - 1
      while (i < j) {
        if (
          temp[i].key == temp[j].key
          ||
          temp[i].node.data != temp[j].node.data
          ||
          temp[i].parent.data != temp[j].parent.data
        ) {
          return false
        }
        i++
        j--
      }
    } else {
      return false
    }
    queue = temp.map(item => item.node)
  }
  return true
}

function isSymmetricRecursive<T>(root: Node<T>) {
  return isMirror(root, root)

  function isMirror<K extends Node<T>>(t1: K, t2: K): boolean {
    if (t1 == null && t2 == null) return true
    if (t1 == null || t2 == null) return false

    return t1.data == t2.data && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
  }
}
