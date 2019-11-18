import { expect } from 'chai'
import { LRUCache } from '../../src/leetcode/lru-cache'

describe('lru-cache', () => {
  it('should return right output when input', () => {
    let cache = new LRUCache<number>(2)
    expect(cache.put(1, 1)).to.be.undefined
    expect(cache.put(2, 2)).to.be.undefined
    expect(cache.get(1)).to.equal(1)
    expect(cache.put(3, 3)).to.be.undefined
    expect(cache.get(2)).to.equal(-1)
    expect(cache.put(4, 4)).to.be.undefined
    expect(cache.get(1)).to.equal(-1)
    expect(cache.get(3)).to.equal(3)
    expect(cache.get(4)).to.equal(4)
    expect(cache.put(3, 3)).to.be.undefined
  })
})
