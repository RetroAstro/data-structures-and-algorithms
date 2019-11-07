import { expect } from 'chai'
import { KthLargest } from '../../src/leetcode/kth-largest-element-in-a-stream'

describe('kth-largest-element-in-a-stream', () => {
  it('should return kth largest element in a stream', () => {
    let stream = new KthLargest(3, [4, 5, 8, 2])
    
    expect(stream.add(3)).to.equal(4)
    expect(stream.add(5)).to.equal(5)
    expect(stream.add(10)).to.equal(5)
    expect(stream.add(9)).to.equal(8)
    expect(stream.add(4)).to.equal(8)
  })
})
