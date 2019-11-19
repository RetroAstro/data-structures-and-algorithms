import { expect } from 'chai'
import { HashTableSeperateChaining } from '../../../src/data-structures/hash-table/hash-table-seperate-chaining'
import { MyObj } from './my-obj'

describe('hash-table-seperate-chaining', () => {
  const A = 'Jonathan'
  const B = 'Jamie'
  const C = 'Sue'

  it('start empty', () => {
    let table = new HashTableSeperateChaining<number, number>()
    expect(table.size()).to.equal(0)
    expect(table.isEmpty()).to.be.true
  })

  it('generate hashcode', () => {
    let table: any
    // number
    table = new HashTableSeperateChaining<number, number>()
    expect(table.hashCode(1)).to.equal(12)
    expect(table.hashCode(10)).to.equal(23)
    expect(table.hashCode(100)).to.equal(34)
    expect(table.hashCode(1000)).to.equal(8)
    // string
    table = new HashTableSeperateChaining<string, number>()
    expect(table.hashCode('1')).to.equal(12)
    expect(table.hashCode('10')).to.equal(23)
    expect(table.hashCode('100')).to.equal(34)
    expect(table.hashCode('1000')).to.equal(8)
    expect(table.hashCode('Aa')).to.equal(14)
    expect(table.hashCode('Bb')).to.equal(16)
    expect(table.hashCode('Cc')).to.equal(18)
    // object
    table = new HashTableSeperateChaining<MyObj, MyObj>()
    let objs = []
    for (let i = 1; i < 5; i++) {
      objs.push(new MyObj(i, i + 1))
    }
    expect(table.hashCode(objs[0])).to.equal(1)
    expect(table.hashCode(objs[1])).to.equal(3)
    expect(table.hashCode(objs[2])).to.equal(5)
    expect(table.hashCode(objs[3])).to.equal(7)
  })

  it('put undefined and null keys and values', () => {
    let table = new HashTableSeperateChaining<string, number>()

    expect(table.put('undefined', undefined)).to.equal(false)
    expect(table.get('undefined')).to.equal(undefined)

    expect(table.put('undefined', 1)).to.equal(true)
    expect(table.get('undefined')).to.equal(1)
    expect(table.put('undefined', 2)).to.equal(true)
    expect(table.get('undefined')).to.equal(2)

    expect(table.put('null', null)).to.equal(false)
    expect(table.get('null')).to.equal(undefined)

    expect(table.put('null', 1)).to.equal(true)
    expect(table.get('null')).to.equal(1)
    expect(table.put('null', 2)).to.equal(true)
    expect(table.get('null')).to.equal(2)
    
    table.clear()

    expect(table.put(undefined, undefined)).to.equal(false)
    expect(table.get(undefined)).to.equal(undefined)

    expect(table.put(undefined, 1)).to.equal(false)
    expect(table.get(undefined)).to.equal(undefined)

    expect(table.put(null, null)).to.equal(false)
    expect(table.get(null)).to.equal(undefined)

    expect(table.put(null, 1)).to.equal(false)
    expect(table.get(null)).to.equal(undefined)
  })

  it('put values with number key without collisions', () => {
    let table = new HashTableSeperateChaining<number, number>()
    expect(table.put(1, 1)).to.be.true
    expect(table.put(2, 2)).to.be.true
    expect(table.put(3, 3)).to.be.true
    expect(table.put(4, 4)).to.be.true
    expect(table.put(5, 5)).to.be.true
    expect(table.get(1)).to.equal(1)
    expect(table.get(2)).to.equal(2)
    expect(table.get(3)).to.equal(3)
    expect(table.get(4)).to.equal(4)
    expect(table.get(5)).to.equal(5)
  })

  it('put values with string key without collisions', () => {
    let table = new HashTableSeperateChaining<string, number>()
    expect(table.put('1', 1)).to.be.true
    expect(table.put('10', 10)).to.be.true
    expect(table.put('100', 100)).to.be.true
    expect(table.put('1000', 1000)).to.be.true
    expect(table.get('1')).to.equal(1)
    expect(table.get('10')).to.equal(10)
    expect(table.get('100')).to.equal(100)
    expect(table.get('1000')).to.equal(1000)
  })

  it('put values with object key without collisions', () => {
    let table = new HashTableSeperateChaining<MyObj, MyObj>()
    let objs = []
    for (let i = 1; i < 5; i++) {
      let item = new MyObj(i, i + 1)
      objs.push(item)
      expect(table.put(item, item)).to.be.true
    }
    expect(table.get(objs[0])).to.deep.equal(objs[0])
    expect(table.get(objs[1])).to.deep.equal(objs[1])
    expect(table.get(objs[2])).to.deep.equal(objs[2])
    expect(table.get(objs[3])).to.deep.equal(objs[3])
  })

  it('put values with collisions', () => {
    let table = new HashTableSeperateChaining<string, string>()
    expect(table.put(A, A)).to.be.true
    expect(table.get(A)).to.equal(A)
    expect(table.getList(A).size()).to.equal(1)
    expect(table.put(B, B)).to.be.true
    expect(table.get(B)).to.equal(B)
    expect(table.getList(B).size()).to.equal(2)
    expect(table.put(C, C)).to.be.true
    expect(table.get(C)).to.equal(C)
    expect(table.getList(C).size()).to.equal(3)
    let head = table.getList(A).getHead()
    expect(head.data.value).to.equal(A)
    expect(head.next.data.value).to.equal(B)
    expect(head.next.next.data.value).to.equal(C)
  })

  it('remove elements without collisions', () => {
    let table = new HashTableSeperateChaining<number, number>()
    table.put(1, 1)
    table.put(2, 2)
    table.put(3, 3)
    table.put(4, 4)
    table.put(5, 5)
    expect(table.size()).to.equal(5)
    expect(table.remove(5)).to.be.true
    expect(table.size()).to.equal(4)
    expect(table.remove(4)).to.be.true
    expect(table.size()).to.equal(3)
    expect(table.remove(3)).to.be.true
    expect(table.size()).to.equal(2)
    expect(table.remove(2)).to.be.true
    expect(table.size()).to.equal(1)
    expect(table.remove(1)).to.be.true
    expect(table.remove(1)).to.be.false
    expect(table.size()).to.equal(0)
    expect(table.isEmpty()).to.be.true
  })

  it('remove elements with collisions', () => {
    removeWithCollision(A, B, C)
    removeWithCollision(A, C, B)
    removeWithCollision(B, A, C)
    removeWithCollision(B, C, A)
    removeWithCollision(C, A, B)
    removeWithCollision(C, B, A)
  })

  function removeWithCollision(a: string, b: string, c: string) {
    let table = new HashTableSeperateChaining<string, string>()

    expect(table.put(A, A)).to.be.true
    expect(table.getList(A).size()).to.equal(1)
    expect(table.put(B, B)).to.be.true
    expect(table.getList(B).size()).to.equal(2)
    expect(table.put(C, C)).to.be.true
    expect(table.getList(C).size()).to.equal(3)

    expect(table.remove(a)).to.be.true
    expect(table.get(a)).to.be.undefined
    expect(table.get(b)).to.equal(b)
    expect(table.get(c)).to.equal(c)

    expect(table.remove(b)).to.be.true
    expect(table.get(a)).to.be.undefined
    expect(table.get(b)).to.be.undefined
    expect(table.get(c)).to.equal(c)

    expect(table.remove(c)).to.be.true
    expect(table.get(a)).to.be.undefined
    expect(table.get(b)).to.be.undefined
    expect(table.get(c)).to.be.undefined
  }
})
