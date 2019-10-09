type Map = { [key: number]: number }

export function majorityElement(nums: number[]) {
  let mark = Math.floor(nums.length / 2)
  let map = <Map>{}

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]

    if (map[key] !== undefined) {
      map[key] = ++map[key]
    } else {
      map[key] = 1
    }
  }

  let entries = Object.entries(map)

  for (let i = 0; i < entries.length; i++) {
    let [key, value] = entries[i]

    if (value > mark) {
      return Number(key)
    }
  }

  return undefined
}
