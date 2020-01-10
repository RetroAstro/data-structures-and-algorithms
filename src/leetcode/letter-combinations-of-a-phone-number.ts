type Map = { [key: string]: string[] }

export function letterCombinations(digits: string) {
  if (digits == '') return []
  
  let map: Map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let arr = digits.split('').map(key => map[key])
  let res: string[] = []

  recursive('', 0, arr)
  return res

  function recursive(str: string, depth: number, arr: string[][]) {
    let temp = arr[depth]
    depth++
    if (temp) {
      temp.forEach(item => recursive(str + item, depth, arr))
    } else {
      res.push(str)
    }
  }
}
