import { SequenceStack } from '../data-structures/stack/sequence-stack'

export function trap(height: number[]) {
  let result = 0
  let current = 0
  let stack = new SequenceStack<number>()

  while (current < height.length) {
    while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
      let peek = stack.peek()
      stack.pop()
      if (stack.isEmpty()) break
      let distance = current - stack.peek() - 1
      let waterHeight = Math.min(height[current], height[stack.peek()]) - height[peek]
      result += distance * waterHeight
    }
    stack.push(current)
    current++
  }

  return result
}
