import { expect } from 'chai'
import { MinStack } from '../../src/leetcode/min-stack'

describe('min-stack', () => {
  it('should support push / pop / getMin method when initialize min stack', () => {
    let stack = new MinStack<number>()
    stack.push(-2)
    stack.push(0)
    stack.push(-3)
    expect(stack.getMin()).to.equal(-3)
    expect(stack.pop()).to.equal(-3)
    expect(stack.top()).to.equal(0)
    expect(stack.getMin()).to.equal(-2)
  })
})
