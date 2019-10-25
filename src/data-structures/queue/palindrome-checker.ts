import { SequenceDeque } from './sequence-deque'

export function palindromeChecker(str: string) {
  if (str == undefined || str == '') {
    return false
  }

  let deque = new SequenceDeque<string>()
  let lowerStr = str.toLocaleLowerCase().split(' ').join('')

  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(lowerStr.charAt(i))
  }

  let firstChar: string, lastChar: string

  while (deque.size() > 1) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      return false
    }
  }

  return true
}
