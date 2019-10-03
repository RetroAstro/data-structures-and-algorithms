import { expect } from 'chai'
import { Node } from '../../src/data-structures/linked-list/models'
import { SinglyLinkedList } from '../../src/data-structures/linked-list/singly-linked-list'
import { mergeTwoLists } from '../../src/leetcode/merge-two-sorted-lists'

function getLinkedList(array: number[]) {
  let list = new SinglyLinkedList<number>()
  array.forEach(item => list.push(item))
  return list
}

function output(node: Node<number>) {
  let result = []
  while (node.next != null) {
    result.push(node.data)
    node = node.next
  }
  result.push(node.data)
  return result
}

describe('merge-two-sorted-lists', () => {
  it('should output 1->1->2->3->4->4 when input 1->2->4, 1->3->4', () => {
    let l1 = getLinkedList([1, 2, 4]).getHead()
    let l2 = getLinkedList([1, 3, 4]).getHead()
    expect(output(mergeTwoLists(l1, l2))).to.deep.equal([1, 1, 2, 3, 4, 4])
  })
})
