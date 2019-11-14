import { expect } from 'chai'

export function testSearchAlgorithm(algorithm: Function, name: string) {
  describe(name, () => {
    const SIZE = 100

    function createSortedArray() {
      let array: number[] = []
      for (let i = 1; i <= SIZE; i++) {
        array.push(i)
      }
      return array
    }

    it('work with empty array', () => {
      expect(algorithm([], 1)).to.equal(-1)
    })
  
    it('find value at first position', () => {
      expect(algorithm(createSortedArray(), 1)).to.equal(0)
    })
  
    it('find value at last position', () => {
      expect(algorithm(createSortedArray(), 100)).to.equal(99)
    })
  
    it('find value at different position', () => {
      let sortedArray = createSortedArray()

      for (let i = 1; i <= SIZE; i++) {
        expect(algorithm(sortedArray, i)).to.equal(i - 1)
      }
    })
  })
}
