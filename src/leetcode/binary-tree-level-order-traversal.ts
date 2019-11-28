import { Node } from '../data-structures/binary-tree/node'

export function levelOrder<T>(root: Node<T>): T[][] {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let arr = [], temp = []
    while (queue.length) {
      let node = queue.shift()
      arr.push(node.data)
      if (node.left) {
        temp.push(node.left)
      }
      if (node.right) {
        temp.push(node.right)
      }
    }
    queue = temp
    result.push(arr)
  }
  return result
}
