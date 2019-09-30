import { expect } from 'chai'
import { spliceContainer } from '../../../src/data-structures/array/splice'

describe('splice', () => {
  it('should insert value at index 1', () => {
    let array = ['Jan', 'March']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(1, 0, 'Feb')
    expect(newValue).to.deep.equal(['Jan', 'Feb', 'March'])
    expect(deleteValue).to.deep.equal([])
  })

  it('should replace value at index 1', () => {
    let array = ['Jan', 'April']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(1, 1, 'Feb', 'March')
    expect(newValue).to.deep.equal(['Jan', 'Feb', 'March'])
    expect(deleteValue).to.deep.equal(['April'])
  })

  it('should delete value at index 3', () => {
    let array = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(3, 1)
    expect(newValue).to.deep.equal(['angel', 'clown', 'drum', 'sturgeon'])
    expect(deleteValue).to.deep.equal(['mandarin'])
  })

  it('should delete all values at index 2', () => {
    let array = ['angel', 'clown', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(2)
    expect(newValue).to.deep.equal(['angel', 'clown'])
    expect(deleteValue).to.deep.equal(['mandarin', 'sturgeon'])
  })

  it('should delete value at index -2', () => {
    let array = ['angel', 'clown', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(-2, 1)
    expect(newValue).to.deep.equal(['angel', 'clown', 'sturgeon'])
    expect(deleteValue).to.deep.equal(['mandarin'])
  })

  it('should not act when start > length', () => {
    let array = ['angel', 'clown']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(3, 1)
    expect(newValue).to.deep.equal(['angel', 'clown'])
    expect(deleteValue).to.deep.equal([])
  })

  it('should act at index 0 when |start| > length', () => {
    let array = ['angel', 'clown']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(-3)
    expect(newValue).to.deep.equal([])
    expect(deleteValue).to.deep.equal(['angel', 'clown'])
  })

  it('should delete all values at index 1 when deleteCount >= length - index', () => {
    let array = ['angel', 'clown', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(1, 5)
    expect(newValue).to.deep.equal(['angel'])
    expect(deleteValue).to.deep.equal(['clown', 'mandarin', 'sturgeon'])
  })

  it('should not delete when deleteCount <= 0', () => {
    let array = ['angel', 'clown', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice(2, -4)
    expect(newValue).to.deep.equal(['angel', 'clown', 'mandarin', 'sturgeon'])
    expect(deleteValue).to.deep.equal([])
  })

  it('should not act when start is empty', () => {
    let array = ['angel', 'clown', 'mandarin', 'sturgeon']
    let container = new spliceContainer(array)
    let [newValue, deleteValue] = container.splice()
    expect(newValue).to.deep.equal(['angel', 'clown', 'mandarin', 'sturgeon'])
    expect(deleteValue).to.deep.equal([])
  })
})