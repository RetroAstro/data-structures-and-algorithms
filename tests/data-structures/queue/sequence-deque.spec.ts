import { expect } from 'chai'
import { SequenceDeque } from '../../../src/data-structures/queue/sequence-deque'

describe('sequence-deque', () => {
  let deque: SequenceDeque<number>

  beforeEach(() => {
    deque = new SequenceDeque<number>()
  })

  it('start empty', () => {
    expect(deque.size()).to.equal(0)
    expect(deque.isEmpty()).to.equal(true)
  })

  it('add data in the back', () => {
    deque.addBack(1)
    expect(deque.peekBack()).to.equal(1)
    expect(deque.size()).to.equal(1)

    deque.addBack(2)
    expect(deque.peekBack()).to.equal(2)
    expect(deque.size()).to.equal(2)

    deque.addBack(3)
    expect(deque.peekBack()).to.equal(3)
    expect(deque.size()).to.equal(3)
  })

  it('add data in the front', () => {
    deque.addFront(1)
    expect(deque.peekFront()).to.equal(1)
    expect(deque.size()).to.equal(1)

    deque.addFront(2)
    expect(deque.peekFront()).to.equal(2)
    expect(deque.size()).to.equal(2)

    deque.addFront(3)
    expect(deque.peekFront()).to.equal(3)
    expect(deque.size()).to.equal(3)

    deque.removeFront()
    deque.addFront(4)
    expect(deque.size()).to.equal(3)
  })

  it('remove data from the back', () => {
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    deque.addFront(0)

    expect(deque.removeBack()).to.equal(3)
    expect(deque.removeBack()).to.equal(2)
    expect(deque.removeBack()).to.equal(1)
    expect(deque.removeBack()).to.equal(0)
    expect(deque.removeBack()).to.equal(undefined)
  })

  it('remove data from the front', () => {
    deque.addFront(1)
    deque.addBack(2)
    deque.addBack(3)
    deque.addFront(0)
    deque.addFront(-1)
    deque.addFront(-2)

    expect(deque.removeFront()).to.equal(-2)
    expect(deque.removeFront()).to.equal(-1)
    expect(deque.removeFront()).to.equal(0)
    expect(deque.removeFront()).to.equal(1)
    expect(deque.removeFront()).to.equal(2)
    expect(deque.removeFront()).to.equal(3)
    expect(deque.removeFront()).to.equal(undefined)
  })

  it('allow to peek at the front data in the deque without removing it', () => {
    expect(deque.peekFront()).to.equal(undefined)

    deque.addFront(1)
    expect(deque.peekFront()).to.equal(1)
    deque.addBack(2)
    expect(deque.peekFront()).to.equal(1)
    deque.addBack(3)
    expect(deque.peekFront()).to.equal(1)
    deque.addFront(0)
    expect(deque.peekFront()).to.equal(0)
    deque.addFront(-1)
    expect(deque.peekFront()).to.equal(-1)
    deque.addFront(-2)
    expect(deque.peekFront()).to.equal(-2)
  })

  it('allow to peek at the back data in the deque without removing it', () => {
    expect(deque.peekBack()).to.equal(undefined)

    deque.addFront(1)
    expect(deque.peekBack()).to.equal(1)
    deque.addBack(2)
    expect(deque.peekBack()).to.equal(2)
    deque.addBack(3)
    expect(deque.peekBack()).to.equal(3)
    deque.addFront(0)
    expect(deque.peekBack()).to.equal(3)
    deque.addFront(-1)
    expect(deque.peekBack()).to.equal(3)
    deque.addFront(-2)
    expect(deque.peekBack()).to.equal(3)
  })

  it('return the correct size', () => {
    expect(deque.size()).to.equal(0)

    deque.addFront(1)
    expect(deque.size()).to.equal(1)
    deque.addBack(2)
    expect(deque.size()).to.equal(2)
    deque.addBack(3)
    expect(deque.size()).to.equal(3)
    deque.addFront(0)
    expect(deque.size()).to.equal(4)
    deque.addFront(-1)
    expect(deque.size()).to.equal(5)
    deque.addFront(-2)
    expect(deque.size()).to.equal(6)

    deque.clear()
    expect(deque.size()).to.equal(0)

    deque.addFront(1)
    deque.addBack(2)
    expect(deque.size()).to.equal(2)

    deque.removeFront()
    deque.removeBack()
    expect(deque.size()).to.equal(0)
  })

  it('return if it is empty', () => {
    expect(deque.isEmpty()).to.equal(true)

    deque.addFront(1)
    expect(deque.isEmpty()).to.equal(false)
    deque.addBack(2)
    expect(deque.isEmpty()).to.equal(false)

    deque.clear()
    expect(deque.isEmpty()).to.equal(true)

    deque.addFront(1)
    deque.addBack(2)
    expect(deque.isEmpty()).to.equal(false)

    deque.removeFront()
    expect(deque.isEmpty()).to.equal(false)
    deque.removeBack()
    expect(deque.isEmpty()).to.equal(true)
  })

  it('clear the queue', () => {
    deque.clear()
    expect(deque.isEmpty()).to.equal(true)

    deque.addFront(1)
    deque.addBack(2)
    expect(deque.isEmpty()).to.equal(false)

    deque.clear()
    expect(deque.isEmpty()).to.equal(true)
  })
})
