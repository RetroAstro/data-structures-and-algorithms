import { expect } from 'chai'
import { hotPotato } from '../../../src/data-structures/queue/hot-potato'

describe('hot-patato', () => {
  it('hot patato game', () => {
    let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
    expect(hotPotato(names, 6).winner).to.equal('Ingrid')
    expect(hotPotato(names, 6).elimitatedList).to.deep.equal(['Jack', 'Carl', 'John', 'Camila'])
    expect(hotPotato(names, 7).winner).to.equal('John')
    expect(hotPotato(names, 7).elimitatedList).to.deep.equal(['Camila', 'Jack', 'Carl', 'Ingrid'])
    expect(hotPotato(names, 8).winner).to.equal('Jack')
    expect(hotPotato(names, 8).elimitatedList).to.deep.equal(['Ingrid', 'Carl', 'Camila', 'John'])
    expect(hotPotato(names, 9).winner).to.equal('Ingrid')
    expect(hotPotato(names, 9).elimitatedList).to.deep.equal(['Carl', 'Jack', 'Camila', 'John'])
    expect(hotPotato(names, 10).winner).to.equal('Carl')
    expect(hotPotato(names, 10).elimitatedList).to.deep.equal(['John', 'Ingrid', 'Jack', 'Camila'])
  })
})
