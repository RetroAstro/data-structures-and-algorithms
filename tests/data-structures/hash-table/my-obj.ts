export class MyObj {
  constructor(public key: any, public value: any) {}
  
  toString() {
    return `${this.key.toString()}|${this.value.toString()}`
  }
}
