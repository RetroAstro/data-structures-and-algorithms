import { Node } from '../data-structures/binary-tree/node'

export function maxDepth<T>(root: Node<T>): number {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
}
