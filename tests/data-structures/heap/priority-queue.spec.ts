import { expect } from 'chai'
import { PriorityQueue } from '../../../src/data-structures/heap/priority-queue'

describe('priority-queue', () => {
  let minQueue: PriorityQueue<any>
  let maxQueue: PriorityQueue<any>

  beforeEach(() => {
    minQueue = new PriorityQueue('min')
    maxQueue = new PriorityQueue('max')
  })

  it('start empty', () => {
    expect(minQueue.size()).to.equal(0)
    expect(minQueue.isEmpty()).to.equal(true)
    expect(minQueue.peek()).to.equal(undefined)
    expect(minQueue.remove()).to.equal(undefined)

    expect(maxQueue.size()).to.equal(0)
    expect(maxQueue.isEmpty()).to.equal(true)
    expect(maxQueue.peek()).to.equal(undefined)
    expect(maxQueue.remove()).to.equal(undefined)
  })

  it('add values into priority queue', () => {
    minQueue.add(1)
    expect(minQueue.size()).to.equal(1)
    minQueue.add(2)
    expect(minQueue.size()).to.equal(2)
    minQueue.add(3)
    expect(minQueue.size()).to.equal(3)
    expect(minQueue.isEmpty()).to.equal(false)

    maxQueue.add(1)
    expect(maxQueue.size()).to.equal(1)
    maxQueue.add(2)
    expect(maxQueue.size()).to.equal(2)
    maxQueue.add(3)
    expect(maxQueue.size()).to.equal(3)
    expect(maxQueue.isEmpty()).to.equal(false)
  })

  it('remove values from priority queue', () => {
    minQueue.add('d')
    minQueue.add('c')
    minQueue.add('b')
    minQueue.add('a')

    expect(minQueue.peek()).to.equal('a')
    expect(minQueue.remove()).to.equal('a')
    expect(minQueue.peek()).to.equal('b')
    expect(minQueue.remove()).to.equal('b')
    expect(minQueue.peek()).to.equal('c')
    expect(minQueue.remove()).to.equal('c')
    expect(minQueue.peek()).to.equal('d')
    expect(minQueue.remove()).to.equal('d')
    expect(minQueue.peek()).to.equal(undefined)
    expect(minQueue.remove()).to.equal(undefined)

    maxQueue.add('a')
    maxQueue.add('b')
    maxQueue.add('c')
    maxQueue.add('d')

    expect(maxQueue.peek()).to.equal('d')
    expect(maxQueue.remove()).to.equal('d')
    expect(maxQueue.peek()).to.equal('c')
    expect(maxQueue.remove()).to.equal('c')
    expect(maxQueue.peek()).to.equal('b')
    expect(maxQueue.remove()).to.equal('b')
    expect(maxQueue.peek()).to.equal('a')
    expect(maxQueue.remove()).to.equal('a')
    expect(maxQueue.peek()).to.equal(undefined)
    expect(maxQueue.remove()).to.equal(undefined)
  })

  it('clear priority queue', () => {
    minQueue.add(1)
    minQueue.add(2)
    minQueue.add(3)
    minQueue.clear()
    expect(minQueue.size()).to.equal(0)
    expect(minQueue.isEmpty()).to.equal(true)
    
    maxQueue.add(1)
    maxQueue.add(2)
    maxQueue.add(3)
    maxQueue.clear()
    expect(maxQueue.size()).to.equal(0)
    expect(maxQueue.isEmpty()).to.equal(true)
  })

  it('wrong type', () => {
    expect(() => new PriorityQueue(null)).to.throw('Invalid Type !')
  })
})
