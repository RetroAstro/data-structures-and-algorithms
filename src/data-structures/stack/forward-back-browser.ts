import { SequenceStack } from './sequence-stack'

export class ForwardBackBrowser<T> {
  private stackX: SequenceStack<T>
  private stackY: SequenceStack<T>

  constructor() {
    this.stackX = new SequenceStack<T>()
    this.stackY = new SequenceStack<T>()
  }

  get current() {
    return this.stackX.peek()
  }

  goto(url: T) {
    this.stackX.push(url)

    if (this.stackY.size() > 0) {
      this.stackY.clear()
    }
  }

  forward(): any {
    if (this.stackY.isEmpty()) {
      return undefined
    }
    let res = this.stackY.pop()
    this.stackX.push(res)
  }
  
  back(): any {
    if (this.stackX.isEmpty()) {
      return undefined
    }
    let res = this.stackX.pop()
    this.stackY.push(res)
  }
}
