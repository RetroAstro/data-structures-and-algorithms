export class Node<T> {
  constructor(public data: T, public next?: Node<T>) {}
}

export class DoublyNode<T> extends Node<T> {
  constructor(
    public data: T,
    public next?: DoublyNode<T>,
    public prev?: DoublyNode<T>
  ) {
    super(data, next)
  }
}
