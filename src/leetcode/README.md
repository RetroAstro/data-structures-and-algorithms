**两数之和**

给定一个整数数组 `nums` 和一个目标值 `target` ，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例：

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

思路：

将对象作为字典，以 `target - nums[i]` 作为键名，在一次循环中找出正确答案。

代码：

```js
function twoSum(nums, target) {
  let obj = {}
  
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i]
    } else {
      var key = target - nums[i]
      obj[key] = i
    }
  }

  return []
}
```

**三数之和**

给定一个包含 n 个整数的数组 `nums` ，判断 `nums` 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

示例：

```js
例如，给定数组 nums = [-1, 0, 1, 2, -1, -4]。

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

思路：

* 首先对数组进行排序，排序后固定一个数 nums[i] ，再使用左右指针指向 nums[i] 后面的两端，数字分别为 nums[L] 和 nums[R] ，计算三个数的和 sum 判断是否满足为 0 ，满足则添加进结果集
* 如果 nums[i] 大于 0 ，则三数之和必然无法等于 0 ，结束循环
* 如果 nums[i] == nums[i-1] ，则说明该数字重复，会导致结果重复，所以应该跳过
* 当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++ 
* 当 sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R−− 
* 时间复杂度：O(n2) ，n 为数组长度

代码：

```js
function threeSum(nums) {
  let ans = []
  let len = nums.length

  if (nums == null || len < 3) {
    return ans
  }

  nums.sort((a, b) => a - b) // 排序

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    }

    if (i > 0 && nums[i] == nums[i-1]) {
      continue  // 去重
    }

    let L = i + 1
    let R = len - 1

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]

      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L+1]) {
          L++ // 去重
        }
        while (L < R && nums[R] == nums[R-1]) {
          R-- // 去重
        }
        L++
        R--
      }
      else if (sum < 0) {
        L++
      }
      else if (sum > 0) {
        R--
      }
    }
  }

  return ans
}
```

**合并两个有序链表**

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

```js
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

思路：

* 使用递归实现
* 终止条件：两条链表分别名为 `l1` 和 `l2`，当 `l1` 为空或 `l2` 为空时结束
* 返回值：每一层调用都返回排序好的链表头
* 本级递归内容：如果 `l1` 的 `val` 值更小，则将 `l1.next` 与排序好的链表头相接，`l2` 同理
* 时间复杂度：O(m+n) ，m 为 `l1` 的长度，n 为 `l2` 的长度

代码：

```js
function mergeTwoLists(l1, l2) {
  if (l1 == null) {
    return l2
  }
  if (l2 == null) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
```

