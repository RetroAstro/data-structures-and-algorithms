import { PriorityQueue } from './priority-queue'
import { heapify } from './heapify'

type payload<T> = { key: T; value: T }

export function mergeKArrays(arrays: number[][]) {
  let res = []
  let heap = arrays.map((item, index) => ({ key: item.shift(), value: index }))

  buildMinHeap(heap)

  let queue = new PriorityQueue<payload<number>>('min', heap, (a, b) => [a.key, b.key])

  while (queue.size() > 0) {
    let temp = queue.remove()
    res.push(temp.key)
    if (arrays[temp.value][0]) {
      temp.key = arrays[temp.value].shift()
      queue.add(temp)
    }
  }

  return res
}

function buildMinHeap<T>(array: T[]) {
  let maxIndex = Math.floor(array.length / 2)
  for (let i = maxIndex; i >= 0; i--) {
    heapify<payload<number>>(array, i, array.length, (a, b) => a.key > b.key)
  }
}

