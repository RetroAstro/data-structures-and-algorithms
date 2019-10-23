import { expect } from 'chai'
import { LinkedQueue } from '../../../src/data-structures/queue/linked-queue'

describe('linked-queue', () => {
  let queue: LinkedQueue<number>

  beforeEach(() => {
    queue = new LinkedQueue<number>()
  })

  it('start empty', () => {
    expect(queue.size()).to.equal(0)
    expect(queue.isEmpty()).to.equal(true)
  })

  it('enqueue data', () => {
    queue.enqueue(1)
    expect(queue.size()).to.equal(1)
    queue.enqueue(2)
    expect(queue.size()).to.equal(2)
    queue.enqueue(3)
    expect(queue.size()).to.equal(3)

    expect(queue.isEmpty()).to.equal(false)
  })

  it('dequeue data', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.dequeue()).to.equal(1)
    expect(queue.dequeue()).to.equal(2)
    expect(queue.dequeue()).to.equal(3)
    expect(queue.dequeue()).to.equal(undefined)
  })

  it('implement FIFO logic', () => {
    queue.enqueue(1)
    expect(queue.peek()).to.equal(1)
    queue.enqueue(2)
    expect(queue.peek()).to.equal(1)
    queue.enqueue(3)
    expect(queue.peek()).to.equal(1)

    expect(queue.dequeue()).to.equal(1)
    expect(queue.dequeue()).to.equal(2)
    expect(queue.dequeue()).to.equal(3)
    expect(queue.dequeue()).to.equal(undefined)
  })

  it('allow to peek at the front data in the queue without dequeuing it', () => {
    expect(queue.peek()).to.equal(undefined)

    queue.enqueue(1)
    expect(queue.peek()).to.equal(1)

    queue.enqueue(2)
    expect(queue.peek()).to.equal(1)

    queue.dequeue()
    expect(queue.peek()).to.equal(2)
  })

  it('return the correct size', () => {
    expect(queue.size()).to.equal(0)
    queue.enqueue(1)
    expect(queue.size()).to.equal(1)
    queue.enqueue(2)
    expect(queue.size()).to.equal(2)
    queue.enqueue(3)
    expect(queue.size()).to.equal(3)

    queue.clear()
    expect(queue.isEmpty()).to.equal(true)

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.size()).to.equal(3)

    queue.dequeue()
    expect(queue.size()).to.equal(2)
    queue.dequeue()
    expect(queue.size()).to.equal(1)
    queue.dequeue()
    expect(queue.size()).to.equal(0)
    queue.dequeue()
    expect(queue.size()).to.equal(0)
  })

  it('return if it is empty', () => {
    expect(queue.isEmpty()).to.equal(true)
    queue.enqueue(1)
    expect(queue.isEmpty()).to.equal(false)
    queue.enqueue(2)
    expect(queue.isEmpty()).to.equal(false)
    queue.enqueue(3)
    expect(queue.isEmpty()).to.equal(false)

    queue.clear()
    expect(queue.isEmpty()).to.equal(true)

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.isEmpty()).to.equal(false)

    queue.dequeue()
    expect(queue.isEmpty()).to.equal(false)
    queue.dequeue()
    expect(queue.isEmpty()).to.equal(false)
    queue.dequeue()
    expect(queue.isEmpty()).to.equal(true)
    queue.dequeue()
    expect(queue.isEmpty()).to.equal(true)
  })

  it('clear the queue', () => {
    queue.clear()
    expect(queue.isEmpty()).to.equal(true)

    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).to.equal(false)

    queue.clear()
    expect(queue.isEmpty()).to.equal(true)
  })
})
