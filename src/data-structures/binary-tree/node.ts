export class Node<T> {
  left: Node<T>
  right: Node<T>
  
  constructor(public data: T) {}
}
