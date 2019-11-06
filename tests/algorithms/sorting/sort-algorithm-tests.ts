import { expect } from 'chai'

export function testSortAlgorithm(algorithm: Function, name: string) {
  describe(name, () => {
    const SIZE = 100

    function createNonSortedArray() {
      let array: number[] = []
      for (let i = SIZE; i > 0; i--) {
        array.push(i)
      }
      return array
    }

    function createSortedArray() {
      let array: number[] = []
      for (let i = 1; i <= SIZE; i++) {
        array.push(i)
      }
      return array
    }

    it('work with empty array', () => {
      expect(algorithm([])).to.deep.equal([])
    })

    it('work with 1 item in array', () => {
      expect(algorithm([1])).to.deep.equal([1])
    })

    it('work with 2 items in array', () => {
      expect(algorithm([2, 1])).to.deep.equal([1, 2])
    })

    it('work with 3 items in array', () => {
      expect(algorithm([3, 2, 1])).to.deep.equal([1, 2, 3])
    })

    it('work with sorted array', () => {
      expect(algorithm(createSortedArray())).to.deep.equal(createSortedArray())
    })

    it('work with non-sorted array', () => {
      let array = algorithm(createNonSortedArray())
      expect(array).to.deep.equal(createSortedArray())

      for (let i = 0; i < array.length - 1; i++) {
        expect(array[i] <= array[i + 1]).to.be.true
      }
    })
  })
}
