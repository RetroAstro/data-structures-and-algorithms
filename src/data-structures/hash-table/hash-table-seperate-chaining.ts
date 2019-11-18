import { Entry, toStr } from './util'
import { SinglyLinkedList } from '../linked-list/singly-linked-list'

export class HashTableSeperateChaining<K, V> {
  private table: { [key: number]: SinglyLinkedList<Entry<K, V>> } = {}

  put(key: K, value: V) {
    if (key != null && value != null) {
      let position = this.hashCode(key)
      if (this.table[position] == undefined) {
        this.table[position] = new SinglyLinkedList<Entry<K, V>>()
      }
      let entry = this.getEntry(key, this.table[position])
      if (entry) {
        entry.value = value
      } else {
        this.table[position].push(new Entry(key, value))
      }
      return true
    }
    return false
  }

  get(key: K) {
    let list = this.table[this.hashCode(key)]
    if (list && !list.isEmpty()) {
      let entry = this.getEntry(key, list)
      return entry.value
    }
    return undefined
  }

  remove(key: K) {
    let position = this.hashCode(key)
    let list = this.table[position]
    if (list && !list.isEmpty()) {
      let entry = this.getEntry(key, list)
      list.remove(entry)
      if (list.isEmpty()) {
        delete this.table[position]
      }
      return true
    }
    return false
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return Object.values(this.table)
      .map(list => list.size()).reduce((prev, next) => prev + next)
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

  private getEntry(key: K, list: SinglyLinkedList<Entry<K, V>>) {
    let current = list.getHead()
    while (current != null) {
      if (current.data.key === key) {
        return current.data
      }
      current = current.next
    }
    return undefined
  }
}
