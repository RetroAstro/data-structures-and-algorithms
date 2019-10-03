export class Container {
  protected _array: any[]
  
  constructor(array: any) {
    if (Array.isArray(array)) {
      this._array = array
    } else {
      throw 'can not accept invalid type expect array !'
    }
  }
}
