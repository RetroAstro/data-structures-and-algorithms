export class Node<T> {
  left: Node<T>
  right: Node<T>
  parent?: Parent<T>
  
  constructor(public data: T) {}
}

export class Parent<T> {
  constructor(public node: Node<T>, public path: string) {}
}
