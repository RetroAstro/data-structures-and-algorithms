import { swap } from '../algorithms/sorting/swap'

export function nextPermutation(nums: number[]) {
  let i = nums.length - 2

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }

  reverse(i + 1)
  return nums

  function reverse(start: number, end: number = nums.length - 1) {
    while (start < end) {
      swap(nums, start, end)
      start++
      end--
    }
  }
}
