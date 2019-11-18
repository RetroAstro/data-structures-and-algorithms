import { Entry, toStr } from './util'

export class HashTable<K, V> {
  private table: { [key: number]: Entry<K, V> } = {}

  put(key: K, value: V) {
    if (key != null && value != null) {
      let position = this.hashCode(key)
      this.table[position] = new Entry(key, value)
      return true
    }
    return false
  }

  get(key: K) {
    let entry = this.table[this.hashCode(key)]
    return entry == null ? undefined : entry.value
  }

  remove(key: K) {
    let position = this.hashCode(key)
    if (this.table[position]) {
      delete this.table[position]
      return true
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
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }
}
