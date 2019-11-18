import { expect } from 'chai'
import { HashTable } from '../../../src/data-structures/hash-table/hash-table'
import { MyObj } from './my-obj'

describe('hash-table', () => {
  it('start empty', () => {
    let table = new HashTable<number, number>()
    expect(table.size()).to.equal(0)
    expect(table.isEmpty()).to.be.true
  })

  it('generate hashcode', () => {
    let table: any
    // number
    table = new HashTable<number, number>()
    expect(table.hashCode(1)).to.equal(347)
    expect(table.hashCode(10)).to.equal(356)
    expect(table.hashCode(100)).to.equal(653)
    expect(table.hashCode(1000)).to.equal(324)
    // string
    table = new HashTable<string, number>()
    expect(table.hashCode('1')).to.equal(347)
    expect(table.hashCode('10')).to.equal(356)
    expect(table.hashCode('100')).to.equal(653)
    expect(table.hashCode('1000')).to.equal(324)
    // object
    table = new HashTable<MyObj, MyObj>()
    let objs = []
    for (let i = 1; i < 5; i++) {
      objs.push(new MyObj(i, i + 1))
    }
    expect(table.hashCode(objs[0])).to.equal(124)
    expect(table.hashCode(objs[1])).to.equal(201)
    expect(table.hashCode(objs[2])).to.equal(278)
    expect(table.hashCode(objs[3])).to.equal(355)
  })

  it('put undefined and null keys and values', () => {
    let table = new HashTable<string, number>()

    expect(table.put('undefined', undefined)).to.equal(false)
    expect(table.get('undefined')).to.equal(undefined)

    expect(table.put('undefined', 1)).to.equal(true)
    expect(table.get('undefined')).to.equal(1)

    expect(table.put('null', null)).to.equal(false)
    expect(table.get('null')).to.equal(undefined)

    expect(table.put('null', 1)).to.equal(true)
    expect(table.get('null')).to.equal(1)

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

  it('put values with number key', () => {
    let table = new HashTable<number, number>()
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

  it('put values with string key', () => {
    let table = new HashTable<string, number>()
    expect(table.put('1', 1)).to.be.true
    expect(table.put('10', 10)).to.be.true
    expect(table.put('100', 100)).to.be.true
    expect(table.put('1000', 1000)).to.be.true
    expect(table.get('1')).to.equal(1)
    expect(table.get('10')).to.equal(10)
    expect(table.get('100')).to.equal(100)
    expect(table.get('1000')).to.equal(1000)
  })

  it('put values with object key', () => {
    let table = new HashTable<MyObj, MyObj>()
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

  it('remove elements', () => {
    let table = new HashTable<number, number>()
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
})
