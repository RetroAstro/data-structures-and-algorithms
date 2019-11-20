import { Entry, toStr } from './util'

export class HashTableLinearProbling<K, V> {
  private table: { [key: number]: Entry<K, V> } = {}

  put(key: K, value: V) {
    if (key != null && value != null) {
      let position = this.hashCode(key)
      if (this.table[position] && this.table[position].key !== key) {
        while (this.table[position] != undefined) {
          position++
        }
      }
      this.table[position] = new Entry(key, value)
      return true
    }
    return false
  }

  get(key: K) {
    let position = this.hashCode(key)
    if (this.table[position]) {
      while (this.table[position] && this.table[position].key !== key) {
        position++
      }
      if (this.table[position]) {
        return this.table[position].value
      }
    }
    return undefined
  }

  remove(key: K) {
    let position = this.hashCode(key)
    if (this.table[position]) {
      while (this.table[position] && this.table[position].key !== key) {
        position++
      }
      if (this.table[position]) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
    }
    return false
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return Object.keys(this.table).length
  }

  clear() {
    this.table = {}
  }

  hashCode(key: K) {
    let tableKey = toStr(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i) 
    }
    return hash % 37
  }

  getEntry(index: number) {
    return this.table[index]
  }

  private verifyRemoveSideEffect(key: K, removedPosition: number) {
    let hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      let posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }
}
