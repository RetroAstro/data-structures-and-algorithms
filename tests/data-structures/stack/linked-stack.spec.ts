import { expect } from 'chai'
import { LinkedStack } from '../../../src/data-structures/stack/linked-stack'

describe('linked-stack', () => {
  let stack: LinkedStack<number>

  beforeEach(() => {
    stack = new LinkedStack<number>()
  })

  it('start empty', () => {
    expect(stack.size()).to.equal(0)
    expect(stack.isEmpty()).to.equal(true)
  })

  it('push data', () => {
    stack.push(1)
    expect(stack.size()).to.equal(1)
    stack.push(2)
    expect(stack.size()).to.equal(2)
    stack.push(3)
    expect(stack.size()).to.equal(3)
  })

  it('pop data', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).to.equal(3)
    expect(stack.pop()).to.equal(2)
    expect(stack.pop()).to.equal(1)
    expect(stack.pop()).to.equal(undefined)
  })

  it('return correct size', () => {
    expect(stack.size()).to.equal(0)
    stack.push(1)
    expect(stack.size()).to.equal(1)
    stack.push(2)
    expect(stack.size()).to.equal(2)
    stack.push(3)
    expect(stack.size()).to.equal(3)

    stack.clear()
    expect(stack.isEmpty()).to.equal(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.size()).to.equal(2)
    stack.pop()
    expect(stack.size()).to.equal(1)
    stack.pop()
    expect(stack.size()).to.equal(0)
    stack.pop()
    expect(stack.size()).to.equal(0)
  })

  it('return if it is empty', () => {
    expect(stack.isEmpty()).to.equal(true)
    stack.push(1)
    expect(stack.isEmpty()).to.equal(false)
    stack.push(2)
    expect(stack.isEmpty()).to.equal(false)
    stack.push(3)
    expect(stack.isEmpty()).to.equal(false)

    stack.clear()
    expect(stack.isEmpty()).to.equal(true)

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop()
    expect(stack.isEmpty()).to.equal(false)
    stack.pop()
    expect(stack.isEmpty()).to.equal(false)
    stack.pop()
    expect(stack.isEmpty()).to.equal(true)
    stack.pop()
    expect(stack.isEmpty()).to.equal(true)
  })

  it('clear stack', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.clear()
    expect(stack.isEmpty()).to.equal(true)
  })
})
