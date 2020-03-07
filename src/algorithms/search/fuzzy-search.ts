export class FuzzySearch {
  constructor(private array: number[], private target: number) {}
  
  firstEqual() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = (low + high) >> 1

      if (this.array[mid] > this.target) {
        high = mid - 1
      } else if (this.array[mid] < this.target) {
        low = mid + 1
      } else {
        if (mid == 0 || this.array[mid - 1] != this.target) {
          return mid
        }
        high = mid - 1
      }
    }

    return -1
  }

  lastEqual() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = (low + high) >> 1

      if (this.array[mid] > this.target) {
        high = mid - 1
      } else if (this.array[mid] < this.target) {
        low = mid + 1
      } else {
        if (mid == this.array.length - 1 || this.array[mid + 1] != this.target) {
          return mid
        }
        low = mid + 1
      }
    }

    return -1
  }

  firstGreaterThanOrEqual() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = (low + high) >> 1

      if (this.array[mid] >= this.target) {
        if (mid == 0 || this.array[mid - 1] < this.target) {
          return mid
        }
        high = mid - 1
      } else {
        low = mid + 1
      }
    }

    return -1
  }

  lastLessThanOrEqual() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = (low + high) >> 1

      if (this.array[mid] > this.target) {
        high = mid - 1
      } else {
        if (mid == this.array.length - 1 || this.array[mid + 1] > this.target) {
          return mid
        }
        low = mid + 1
      }
    }

    return -1
  }
}
