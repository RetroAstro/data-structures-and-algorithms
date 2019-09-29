import { Container } from './container'

export class concatContainer extends Container {
  concat(...args: any[]) {
    let result = [...this._array]
    for (var i = 0; i < args.length; i++) {
      result = [
        ...result,
        ...(Array.isArray(args[i]) ? args[i] : [args[i]])
      ]
    }
    return result
  }
}
