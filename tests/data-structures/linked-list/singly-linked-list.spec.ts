import { expect } from 'chai'
import { SinglyLinkedList } from '../../../src/data-structures/linked-list/singly-linked-list'

describe('singly-linked-list', () => {
  function getLinkedList<T>(array: T[]) {
    let result = new SinglyLinkedList<T>()
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
    let list = getLinkedList([1, 2, 3])
    expect(list.getHead().data).to.equal(1)
    expect(list.getHead().next.next.data).to.equal(3)
    expect(list.getHead().next.next.next).to.be.undefined
  })

  it('insert data to linked list', () => {
    let list = getLinkedList([1, 2, 3])
    list.insert(4, 0)
    expect(list.getNodeAt(0).data).to.equal(4)
    list.insert(5, 1)
    expect(list.getNodeAt(1).data).to.equal(5)
    list.insert(6, list.size())
    expect(list.getNodeAt(list.size() - 1).data).to.equal(6)
    expect(list.insert(7, list.size() + 1)).to.be.false
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
