import { expect } from 'chai'
import { SortedLinkedList } from '../../../src/data-structures/linked-list/sorted-linked-list'
import { output } from '../../leetcode/util'

describe('sorted-linked-list', () => {
  function getLinkedList<T>(array: T[]) {
    let result = new SortedLinkedList<T>()
    array.forEach(item => result.push(item))
    return result
  }

  it('start empty', () => {
    let list = getLinkedList([])
    expect(list.getHead()).to.be.undefined
    expect(list.size()).to.equal(0)
    expect(list.isEmpty()).to.be.true
  })

  it('push data list', () => {
    let list = getLinkedList([4, 2, 9, 1, 8])
    expect(output(list.getHead())).to.deep.equal([1, 2, 4, 8, 9])
  })

  it('insert data to linked list', () => {
    let list = getLinkedList([])
    let array = [4, 2, 9, 1, 8]
    array.forEach((item, index) => list.insert(item, index))
    expect(output(list.getHead())).to.deep.equal([1, 2, 4, 8, 9])
  })

  it('remove data from linked list', () => {
    let list = getLinkedList([1, 2, 3, 4, 5])
    list.remove(1)
    expect(list.getHead().data).to.equal(2)
    expect(list.removeAt(5)).to.be.undefined
    list.removeAt(list.size() - 1)
    expect(list.getHead().next.next.data).to.equal(4)
  })

  it('clear linked list', () => {
    let list = getLinkedList([1, 2, 3])
    list.clear()
    expect(list.isEmpty()).to.be.true
  })
})
