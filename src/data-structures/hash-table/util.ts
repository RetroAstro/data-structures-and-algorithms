export class Entry<K, V> {
  constructor(public key: K, public value: V) {}
}

export function toStr(item: any): string {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || typeof item === 'number') {
    return `${item}`
  } else {
    return item.toString()
  }
}
