import { expect } from 'chai'
import { CircularQueue } from '../../../src/data-structures/queue/circular-queue'

describe('circular-queue', () => {
  let queue: CircularQueue<number>
  
  beforeEach(() => {
    queue = new CircularQueue<number>(3)
  })

  it('start empty', () => {
    expect(queue.size()).to.equal(0)
    expect(queue.isEmpty()).to.equal(true)
  })

  it('enqueue data', () => {
    expect(queue.enqueue(1)).to.be.true
    expect(queue.size()).to.equal(1)
    expect(queue.enqueue(2)).to.be.true
    expect(queue.size()).to.equal(2)
    expect(queue.enqueue(3)).to.be.true
    expect(queue.size()).to.equal(3)
    expect(queue.enqueue(4)).to.be.false
    expect(queue.size()).to.equal(3)

    expect(queue.isEmpty()).to.equal(false)
  })

  it('dequeue data', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.enqueue(4)).to.be.false

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

    queue.enqueue(3)
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

    queue.dequeue()
    expect(queue.size()).to.equal(2)
    queue.dequeue()
    expect(queue.size()).to.equal(1)
    queue.dequeue()
    expect(queue.size()).to.equal(0)
    
    queue.enqueue(4)
    expect(queue.size()).to.equal(1)
    queue.dequeue()
    expect(queue.size()).to.equal(0)
    queue.enqueue(5)
    expect(queue.size()).to.equal(1)
    queue.dequeue()
    expect(queue.size()).to.equal(0)
    queue.enqueue(6)
    expect(queue.size()).to.equal(1)
    queue.enqueue(7)
    expect(queue.size()).to.equal(2)
    queue.enqueue(8)
    expect(queue.size()).to.equal(3)
    expect(queue.enqueue(9)).to.be.false
    queue.dequeue()
    queue.dequeue()
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
  })

  it('clear the queue', () => {
    queue.clear()
    expect(queue.isEmpty()).to.equal(true)

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.isEmpty()).to.equal(false)

    queue.clear()
    expect(queue.isEmpty()).to.equal(true)
  })
})
