import { SequenceStack } from './sequence-stack'

export function decimalToBinary(decimal: number) {
  let stack = new SequenceStack<number>()
  let rem: number
  let binaryStr: string = ''

  while (decimal > 0) {
    rem = Math.floor(decimal % 2)
    stack.push(rem)
    decimal = Math.floor(decimal / 2)
  }

  while (!stack.isEmpty()) {
    binaryStr += stack.pop().toString()
  }

  return binaryStr
}
