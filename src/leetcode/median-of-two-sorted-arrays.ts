export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 == 0) {
    return (arr[mid - 1] + arr[mid]) / 2
  }
  return arr[mid]
}
