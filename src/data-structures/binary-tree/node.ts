export class Node<T> {
  left: Node<T> = null
  right: Node<T> = null
  parent?: Parent<T>
  
  constructor(public data: T) {}
}

export class Parent<T> {
  constructor(public node: Node<T>, public path: string) {}
}
