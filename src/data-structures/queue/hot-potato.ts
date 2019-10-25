import { SequenceQueue } from './sequence-queue'

export function hotPotato(dataList: any[], num: number) {
  let queue = new SequenceQueue<number>()
  let elimitatedList = []

  for (let i = 0; i < dataList.length; i++) {
    queue.enqueue(dataList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    elimitatedList,
    winner: queue.dequeue()
  }
}
