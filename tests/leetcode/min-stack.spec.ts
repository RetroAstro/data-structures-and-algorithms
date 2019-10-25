import { expect } from 'chai'
import { MinStack } from '../../src/leetcode/min-stack'

describe('min-stack', () => {
  it('start empty', () => {
    let stack = new MinStack<number>()
    expect(stack.pop()).to.be.undefined
    expect(stack.top()).to.be.undefined
    expect(stack.isEmpty()).to.be.true
    expect(stack.getMin()).to.be.undefined
  })

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
