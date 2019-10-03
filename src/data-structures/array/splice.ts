import { Container } from './container'

export class spliceContainer extends Container {
  splice(
    start: number = this._array.length,
    deleteCount: number = this._array.length,
    ...args: any[]
  ) {
    // 处理边界情况
    if (start < 0) {
      start = (this._array.length + start < 0) ? 0 : (this._array.length + start)
    }
    if (start >= this._array.length) {
      return [this._array, []]
    }
    if (deleteCount < 0) {
      deleteCount = 0
    }
    let newValue = this.makeNewValue(start, deleteCount, args)
    let deleteValue = this.makeDeleteValue(start, deleteCount)
    return [newValue, deleteValue]
  }

  makeNewValue(start: number, deleteCount: number, args: any[]) {
    let result = []
    for (let i = 0; i < start; i++) {
      result[i] = this._array[i]
    }
    for (let i = 0; i < args.length; i++) {
      result.push(args[i])
    }
    for (let i = start + deleteCount; i < this._array.length; i++) {
      result.push(this._array[i])
    }
    return result
  }
  
  makeDeleteValue(start: number, deleteCount: number) {
    let result = []
    let limit = (start + deleteCount) > this._array.length ? this._array.length : (start + deleteCount)
    for (let i = start; i < limit; i++) {
      result.push(this._array[i])
    }
    return result
  }
}
