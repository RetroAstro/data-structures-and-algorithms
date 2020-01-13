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
      let key = target - nums[i]
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

**求众数**

给定一个大小为 *n* 的数组，找到其中的众数。众数是指在数组中出现次数**大于** `n/2` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例：

```js
输入: [3,2,3]
输出: 3
```

```js
输入: [2,2,1,1,1,2,2]
输出: 2
```

思路：

遍历数组记录相同元素出现次数，若次数有大于 `n/2` 的则返回。

代码：

```js
function majorityElement(nums) {
  let mark = Math.floor(nums.length / 2)
  let map = {}

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

**反转链表**

反转一个单链表。

示例：

```js
输入: 1->2->3->4->5->null
输出: 5->4->3->2->1->null
```

思路：

遍历链表，基于已有的每个节点创建新的节点，保存至数组 `list` 。以变量 `i` 记录遍历次数，`list[i - 1]` 即为上一个节点。

代码：

```js
function reverseList(head) {
  let current = head
  let list = []
  let i = 0

  while (current != null) {
    let node = factory(current.data)
    if (i > 0) {
      node.next = list[i - 1]
    }
    list.push(node)
    i++
    current = current.next
  }

  return list[list.length - 1]
  
  function factory(data) {
    return { data, next: null }
  }
}
```

时间复杂度为 O(n) ，空间复杂度为 O(1) 的迭代法：

思路：

在遍历列表时，将当前节点的 `next` 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用。

代码：

```js
function reverseList(head) {
  let prev = null
  let curr = head
  
  while (curr != null) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  
  return prev
}
```

时间复杂度为 O(n) ，空间复杂度为 O(n) 的递归法：

思路：

假设列表为：`n1 -> ... -> n(k-1) -> n(k) -> n(k+1) -> ... -> n(m) -> ∅`

若节点从 `n(k+1)` 到 `n(m)` 已经被反转，而我们正处于 `n(k)`

现在只需 `n(k).next.next = n(k)` 

代码：

```js
function reverseList(head) {
  if (head == null || head.next == null) return head
  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
```

**环形链表**

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例：

```js
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

```js
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

```js
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

思路：

遍历链表，将对象作为字典，以链表节点对象中的 `node.val` 作为键名，链表节点对象作为键值，当字典中已缓存过相应的键值对时则证明该链表存在环。

代码：

```js
function hasCycle(head) {
  let current = head
  let map = {}

  while (current != null) {
    if (map[current.data] == current) {
      return true
    }
    map[current.data] = current
    current = current.next
  }

  return false
}
```

**删除链表中的节点**

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

示例：

```js
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

```js
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9. 
```

说明：

* 链表至少包含两个节点
* 链表中所有节点的值都是唯一的
* 给定的节点为非末尾节点并且一定是链表中的一个有效节点
* 不要从你的函数中返回任何结果

思路：

替换被删除节点的 `val` 与 `next` 。

代码：

```js
function deleteNode(node) {
  node.val = node.next.val
  node.next = node.next.next
}
```

**回文链表**

请判断一个链表是否为回文链表。

示例：

```js
输入: 1->2
输出: false
```

```js
输入: 1->2->2->1
输出: true
```

思路：

遍历链表，用数组收集链表中节点的值，双指针法判断是否为回文。

代码：

```js
function isPalindrome(head) {
  let current = head
  let arr = []

  while (current != null) {
    arr.push(current.data)
    current = current.next
  }

  let i = 0
  let j = arr.length - 1
  
  while (i < j) {
    if (arr[i] == arr[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}
```

**LRU 缓存机制**

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 `get` 和 写入数据 `put` 。

获取数据 `get(key)` - 如果密钥 `(key)` 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 `put(key, value)` - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

示例：

```js
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ )

cache.put(1, 1)
cache.put(2, 2)
cache.get(1)       // 返回  1
cache.put(3, 3)    // 该操作会使得密钥 2 作废
cache.get(2)       // 返回 -1 (未找到)
cache.put(4, 4)    // 该操作会使得密钥 1 作废
cache.get(1)       // 返回 -1 (未找到)
cache.get(3)       // 返回  3
cache.get(4)       // 返回  4
```

思路：

使用字典与双向链表结合来解此题，要注意 `get` 后移除链表中原节点，并将其移动到最新处，同时还要更新字典中的键值。`put` 时先判断字典中是否已经有缓存，有的话则先删除链表中的节点，再以新的键值生成最新的节点。若超过缓存容量大小，则先移除链表中最近最少使用的节点和其字典中的键值对，然后再进行下一步的操作。

代码：

```js
class DoublyNode {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor()
    this.head = { data: '', prev: '', next: '' }
    this.tail = { data: '', prev: '', next: '' }
    this.head.next = this.tail
    this.tail.prev = this.head
    this.count = 0
  }
    
  push(data) {
    let node = new DoublyNode(data)
    let previous = this.tail.prev
    node.next = this.tail
    previous.next = node
    this.tail.prev = node
    node.prev = previous
    this.count++
    return node
  }

  removeNode(node) {
    let previous = node.prev
    previous.next = node.next
    node.next.prev = previous
    this.count--
  }

  size() {
    return this.count
  }

  getHead() {
    return this.head
  }
}

class LRUCache {
  constructor(capacity) {
    this.map = {}
    this.capacity = capacity
    this.list = new DoublyLinkedList()
  }

  get(key) {
    if (this.map[key]) {
      this.list.removeNode(this.map[key])
      let node = this.list.push(this.map[key].data)
      this.map[key] = node
      return node.data.value
    }
    return -1
  }

  put(key, value) {
    if (this.map[key]) {
      this.list.removeNode(this.map[key])
    } else {
      if (
        this.list.size() === this.capacity
      ) {
        let next = this.list.getHead().next
        this.list.removeNode(next)
        delete this.map[next.data.key]
      }
    }
    let item = { key, value }
    let node = this.list.push(item)
    this.map[key] = node
  }
}
```

**有效的括号**

给定一个只包括 ( ) { } [ ] 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例：

```js
输入: "()[]{}"
输出: true
```

```js
输入: "([)]"
输出: false
```

思路：

用数组构造栈，将字符串 `split` 后推入栈，如果栈顶的两个字符满足括号闭合条件则出栈，若最后数组长度为 0 则该字符串有效。

代码：

```js
function isValid(s) {
  let arr = s.split('')
  let matches = ['()', '{}', '[]']
  let stack = []

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])

    if (stack[stack.length - 1] && stack[stack.length - 2]) {
      let str = stack[stack.length - 2] + stack[stack.length - 1]
      
      if (matches.includes(str)) {
        stack.pop()
        stack.pop()
      }
    }
  }

  return !stack.length
}
```

**接雨水**

给定 *n* 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

示例：

```js
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
```

思路：

我们在遍历数组时维护一个栈。如果当前的条形块小于或等于栈顶的条形块，我们将条形块的索引入栈，意思是当前的条形块被栈中的前一个条形块界定。如果我们发现一个条形块长于栈顶，我们可以确定栈顶的条形块被当前条形块和栈的前一个条形块界定，因此我们可以弹出栈顶元素并且累加答案到 result 。

* 使用栈来存储条形块的索引下标。

* 遍历数组：

  * 当栈非空且 `height[current] > height[stack.peek()]` 

    * 意味着栈中元素可以被弹出。弹出栈顶元素 `peek`

    * 计算当前元素和栈顶元素的距离，准备进行填充操作 `distance = current - stack.peek() - 1` 

    * 找出界定高度

      `waterHeight = Math.min(height[current], height[stack.peek()]) - height[peek]` 

    * 累加结果 `result += distance * waterHeight`

代码：

```js
function trap(height) {
  let result = 0
  let current = 0
  let stack = new SequenceStack()

  while (current < height.length) {
    while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
      let peek = stack.peek()
      stack.pop()
      if (stack.isEmpty()) break
      let distance = current - stack.peek() - 1
      let waterHeight = Math.min(height[current], height[stack.peek()]) - height[peek]
      result += distance * waterHeight
    }
    stack.push(current)
    current++
  }

  return result
}
```

**最小栈**

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。

示例：

```js
let stack = new MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
stack.getMin() // 返回 -3
stack.pop()
stack.top() // 返回 0
stack.getMin() // 返回 -2
```

思路：

创建辅助栈，在当前栈入栈时跟辅助栈顶元素比较，若较小则将元素推入辅助栈，在出栈时如果元素等于辅助栈顶元素，则辅助栈顶元素出栈。

代码：

```js
class MinStack {
  constructor() {
    this.count = 0
    this.items = {}
    this.stack = new SequenceStack()
  }
  
  push(data) {
    this.items[this.count] = data
    this.count++
    this.put(data)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    this.take(result)
    return result
  }

  top() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  getMin() {
    return this.stack.peek()
  }

  isEmpty() {
    return this.count === 0
  }

  put(data) {
    if (this.stack.isEmpty()) {
      this.stack.push(data)
    } else {
      data <= this.stack.peek() ? this.stack.push(data) : null
    }
  }

  take(data) {
    if (data === this.stack.peek()) {
      this.stack.pop()
    }
  }
}
```

**完全平方数**

给定正整数 *n*，找到若干个完全平方数（比如 `1, 4, 9, 16, ...`）使得它们的和等于 *n*。你需要让组成和的完全平方数的个数最少。

示例：

```js
输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4
```

```js
输入: n = 13
输出: 2
解释: 13 = 4 + 9
```

思路：

* 动态规划
* 首先初始化长度为 `n+1` 的数组 `dp` ，每个位置都为 `0` 
* 如果 `n` 为 `0` ，则结果为 `0` 
* 对数组进行遍历，下标为 `i` ，每次都将当前数字先更新为最大的结果，即 `dp[i]=i` ，比如 `i=4` ，最坏结果为 `4=1+1+1+1` 即为 `4` 个数字
* 动态转移方程为：`dp[i] = MIN(dp[i], dp[i - j * j] + 1)` ， `i` 表示当前数字，`j*j` 表示平方数
* 时间复杂度：O(n*sqrt(n)) ，sqrt 为平方根

代码：

```js
function numSquares(n) {
  let dp = Array(n + 1).fill(0)
  
  for (let i = 1; i <= n; i++) {
    dp[i] = i

    for (let j = 1; i - j ** 2 >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1)
    }
  }

  return dp[n]
}
```

**爬楼梯** 

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 *n* 是一个正整数。

示例：

```js
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

```js
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

思路：

动态规划，自底向上计算，爬一层有 1 种方法，两层有 2 种，在 n 层的时候，第一次爬时有 1 步和 2 步的选择，剩下 n - 1 和 n - 2 层台阶，因此只需要记忆当前台阶的前两层台阶的方法次数即可。

代码：

```js
function climbStairs(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  
  let result = 0
  let prev = 2
  let doublePrev = 1

  for (let i = 3; i <= n; i++) {
    result = prev + doublePrev
    doublePrev = prev
    prev = result
  }

  return result
}
```

**每日温度**

根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

思路：

* 维护一个单调递增栈，栈内存储气温数组 T 的 index
* 查看当前元素是否大于栈顶元素所对应的 T 的值，也就是 T[stack[stack.length - 1]]
* 如果大于，那说明找到需要等待的天数，如果不大于那说明还没到找到比这天高的温度，同时继续维护这个单调栈
* 如果大于，需要等待的天数就是当前数组 T 的下标减去单调栈顶对应的下标
* 循环完毕，还没有找到需要等待的天数，为 0

代码：

```js
function dailyTemperatures(T) {
  let { length } = T
  let stack = []
  let result = Array(length).fill(0)

  for (let i = 0; i < length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop()
      result[index] = i - index
    }
    stack.push(i)
  }

  return result
}
```

**用队列实现栈**

使用队列实现栈的下列操作：

* push(x) -- 元素 x 入栈
* pop() -- 移除栈顶元素
* peek() -- 获取栈顶元素
* isEmpty() -- 返回栈是否为空

思路：

移除栈顶元素和获取栈顶元素时，让队列依次出队直到剩下一个元素，之后再将出队的所有元素再次入队。

代码：

```js
class Stack {
  constructor() {
    this.queue = new Queue()
  }

  push(data) {
    this.queue.enqueue(data)
  }

  pop() {
    if (this.queue.isEmpty()) {
      return undefined
    }
    let mids = []
    while (this.queue.size() > 1) {
      mids.push(this.queue.dequeue())
    }
    let result = this.queue.dequeue()
    mids.forEach(item => this.queue.enqueue(item))
    return result
  }

  peek() {
    if (this.queue.isEmpty()) {
      return undefined
    }
    let result
    let mids = []
    while (this.queue.size() > 0) {
      if (this.queue.size() === 1) {
        result = this.queue.peek()
      }
      mids.push(this.queue.dequeue())
    }
    mids.forEach(item => this.queue.enqueue(item))
    return result
  }

  isEmpty() {
    return this.queue.isEmpty()
  }

  size() {
    return this.queue.size()
  }

  clear() {
    this.queue.clear()
  }
}
```

**用栈实现队列**

使用栈实现队列的下列操作：

* enqueue(x) -- 将一个元素放入队列的尾部。
* dequeue() -- 从队列首部移除元素。
* peek() -- 返回队列首部的元素。
* isEmpty() -- 返回队列是否为空。

思路：

使用两个栈来实现队列。

代码：

```js
class Queue {
  constructor() {
    this.stackX = new Stack()
    this.stackY = new Stack()
  }

  enqueue(data) {
    this.stackX.push(data)
  }
  
  dequeue() {
    if (this.stackX.isEmpty()) {
      return undefined
    }
    while (this.stackX.size() > 0) {
      this.stackY.push(this.stackX.pop())
    }
    let result = this.stackY.pop()
    while (this.stackY.size() > 0) {
      this.stackX.push(this.stackY.pop())
    }
    return result
  }

  peek() {
    if (this.stackX.isEmpty()) {
      return undefined
    }
    while (this.stackX.size() > 0) {
      this.stackY.push(this.stackX.pop())
    }
    let result = this.stackY.peek()
    while (this.stackY.size() > 0) {
      this.stackX.push(this.stackY.pop())
    }
    return result
  }

  isEmpty() {
    return this.stackX.isEmpty()
  }

  size() {
    return this.stackX.size()
  }

  clear() {
    this.stackX.clear()
  }
}
```

**数据流中的第 K 大元素**

设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

示例：

```js
int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
```

思路：

类实例化时将数组排序，每加入一个元素时再将数组重新排序，`array[array.length - k]` 就是第 K 大元素。

代码：

```js
class KthLargest {
  constructor(k, nums) {
    this.k = k
    this.sorted = quickSort(nums)
  }

  add(val) {
    let array = this.sorted
    let j = this.sorted.length - 1

    for (; j >= 0; j--) {
      if (array[j] > val) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }

    array[j + 1] = val

    return array[array.length - this.k]
  }
}
```

**X 的平方根**

计算并返回 *x* 的平方根，其中 *x* 是非负整数。

示例：

```js
输入: 4
输出: 2
```

```js
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

思路：

二分查找最基本的模版

代码：

```js
function mySqrt(x) {
  let low = 0
  let high = x

  while (low <= high) {
    let mid = low + ((high - low) >> 1)

    if (mid ** 2 === x) {
      return mid
    } else if (mid ** 2 > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return high
}
```

**二叉树的层次遍历**

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

示例：

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果

```js
[
  [3],
  [9,20],
  [15,7]
]
```

思路：

广度优先搜索 ( BFS )

* 使用队列存放每一层的节点, 然后在循环中记录值, 并且把子节点添加进去
* 外循环负责遍历层级结构, 内循环负责遍历每一层的子节点
* 最后把 `temp` 下一层的节点, 再赋给 `queue` , 直到 `queue` 为空则表示全部遍历完毕

代码：

```js
function levelOrder(root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let arr = [], temp = []
    while (queue.length) {
      let node = queue.shift()
      arr.push(node.data)
      if (node.left) {
        temp.push(node.left)
      }
      if (node.right) {
        temp.push(node.right)
      }
    }
    queue = temp
    result.push(arr)
  }
  return result
}
```

**二叉树的最大深度**

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

示例：`[3,9,20,null,null,15,7]` 

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回最大深度 3

思路：

递归求解。

代码：

```js
function maxDepth(root) {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
}
```

**对称二叉树**

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

```js
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的:

```js
    1
   / \
  2   2
   \   \
   3    3
```

递归版思路：

递归结束条件：

都为空指针则返回 true，只有一个为空则返回 false 。

递归过程：

* 判断两个指针当前节点值是否相等
* 判断 A 的右子树与 B 的左子树是否对称
* 判断 A 的左子树与 B 的右子树是否对称

短路：在递归判断过程中存在短路现象，也就是做 与 操作时，如果前面的值返回 false 则后面的不再进行计算。

时间复杂度：O(n) 

代码：

```js
function isSymmetricRecursive(root) {
  return isMirror(root, root)

  function isMirror(t1, t2) {
    if (t1 == null && t2 == null) return true
    if (t1 == null || t2 == null) return false

    return t1.data == t2.data && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
  }
}
```

迭代版思路：

层次遍历二叉树，每层维护一个数组，数组中的元素为 `{ key: 'left', node: node.left, parent: node }` ，创建两个指针从数组两边向中间比较，当出现 `temp[i].key == temp[j].key || temp[i].node.data != temp[j].node.data || temp[i].parent.data != temp[j].parent.data` 时则不满足对称二叉树的条件。

代码：

```js
function isSymmetricIterative(root) {
  if (!root) return true
  let queue = [root]
  while (queue.length) {
    let temp = []
    while (queue.length) {
      let node = queue.shift()
      if (node.left) {
        temp.push({ key: 'left', node: node.left, parent: node })
      }
      if (node.right) {
        temp.push({ key: 'right', node: node.right, parent: node })
      }
    }
    if (temp.length % 2 == 0) {
      let i = 0, j = temp.length - 1
      while (i < j) {
        if (
          temp[i].key == temp[j].key
          ||
          temp[i].node.data != temp[j].node.data
          ||
          temp[i].parent.data != temp[j].parent.data
        ) {
          return false
        }
        i++
        j--
      }
    } else {
      return false
    }
    queue = temp.map(item => item.node)
  }
  return true
}
```

**两数相加**

示例：

```js
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

思路：

* 将两个链表看成是相同长度的进行遍历，如果一个链表较短则在前面补 0 ，比如 `987 + 23 = 987 + 023 = 1010` 
* 每一位计算的同时需要考虑上一位的进位问题，而当前位计算结束后同样需要更新进位值
* 如果两个链表全部遍历完毕后，进位值为 1 ，则在新链表最前方添加节点 1
* 对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 prev ，该指针的下一个节点指向真正的头结点 head 。使用预先指针的目的在于链表初始化时无可用节点值，而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。

代码：

```js
function addTwoNumbers(l1, l2) {
  let prev = new Node(0)
  let curr = prev
  let carry = 0
  while (l1 != null || l2 != null) {
    let x = l1 == null ? 0 : l1.data
    let y = l2 == null ? 0 : l2.data
    let sum = x + y + carry
    carry = sum / 10 >= 1 ? 1 : 0
    sum = sum % 10
    curr.next = new Node(sum)
    curr = curr.next
    if (l1) {
      l1 = l1.next 
    }
    if (l2) {
      l2 = l2.next 
    }
  }
  if (carry == 1) {
    curr.next = new Node(carry)
  }
  return prev.next
}
```

**翻转二叉树**

示例：

输入：

```js
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```js
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

思路：

传入两个相同的 root 递归求解，当 t1 和 t2 都存在时，则交换数值，若只有其中一个存在，则通过其父节点交换子树，然后再递归其子节点的子树，注意不重复交换数值。

代码：

```js
function invertTree(root) {
  invert(root, root)
  return root
  
  function invert(t1, t2, p1 = t1, p2 = t2) {
    if (t1 == null && t2 == null) {
      return
    }

    if (t1 == null && t2) {
      let temp = p2.right
      p2.right = null
      p1.left = temp
      invert(temp.left, temp.right, temp, temp)
    }
    else if (t2 == null && t1) {
      let temp = p1.left
      p1.left = null
      p2.right = temp
      invert(temp.left, temp.right, temp, temp)
    }
    else {
      [t1.data, t2.data] = [t2.data, t1.data]
      invert(t1.left, t2.right, t1, t2)
    }
    
    if (t1 && t2 && t1 != t2) {
      invert(t2.left, t1.right, t2, t1)
    }
  }
}
```

**回文子串**

给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

示例：

```js
输入: "abc"
输出: 3
解释: 三个回文子串: "a", "b", "c"

输入: "aaa"
输出: 6
说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

思路：

动态规划，从左到右，从单个字符到多个字符，存储记忆回文子串。

代码：

```js
function countSubstrings(s) {
  let count = 0
  let len = s.length
  let dp = Array.from({ length: len }, () => new Array(len).fill(0))
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (s.charAt(i) == s.charAt(j) && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        count++
      }
    }
  }
  return count
}
```

**无重复字符的最长子串**

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例：

```js
输入: "abcabcbb"
输出: 3 

输入: "bbbbb"
输出: 1

输入: "pwwkew"
输出: 3
```

思路：

暴力求解

代码：

```js
function lengthOfLongestSubstring(s) {
  if (s == '') return 0
  let max = 1
  let cursor = 0
  let stack: string[] = []
  while (cursor < s.length) {
    let i = cursor
    while (stack.every(item => item != s[i])) {
      stack.push(s[i])
      i++
      if (s[i] == null) break
    }
    if (max < stack.length) {
      max = stack.length
    }
    stack = []
    cursor++
  }
  return max
}
```

**寻找两个有序数组的中位数**

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例：

```js
nums1 = [1, 3]
nums2 = [2]

中位数是 2.0

nums1 = [1, 2]
nums2 = [3, 4]

中位数是 2.5
```

思路：

合并数组，排序，取中位数

代码：

```js
function findMedianSortedArrays(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 == 0) {
    return (arr[mid - 1] + arr[mid]) / 2
  }
  return arr[mid]
}
```

**最长回文子串**

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例：

```js
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

输入: "cbbd"
输出: "bb"
```

思路：

动态规划，在查找回文子串的同时记录最大回文子串。

代码：

```js
function longestPalindrome(s) {
  let len = s.length
  let dp = Array.from({ length: len }, () => new Array(len).fill(0))
  let payload = { max: 0, res: '' }

  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (s.charAt(i) == s.charAt(j) && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        let max = i - j + 1
        if (payload.max < max) {
          payload.max = max
          payload.res = s.slice(j, i + 1)
        }
      }
    }
  }
  
  return payload.res
}
```

**盛最多水的容器**

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例：

```js
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

思路：

双指针法，我们在由线段长度构成的数组中使用两个指针，一个放在开始，一个置于末尾。 此外，我们会使用变量 maxarea 来持续存储到目前为止所获得的最大面积。 在每一步中，我们会找出指针所指向的两条线段形成的区域，更新 maxarea ，并将指向较短线段的指针向较长线段那端移动一步。

最初我们考虑由最外围两条线段构成的区域。现在，为了使面积最大化，我们需要考虑更长的两条线段之间的区域。如果我们试图将指向较长线段的指针向内侧移动，矩形区域的面积将受限于较短的线段而不会获得任何增加。但是，在同样的条件下，移动指向较短线段的指针尽管造成了矩形宽度的减小，但却可能会有助于面积的增大。因为移动较短线段的指针会得到一条相对较长的线段，这可以克服由宽度减小而引起的面积减小。

代码：

```js
function maxArea(height) {
  let i = 0
  let j = height.length - 1
  let max = 0

  while (i < j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
    if (height[i] <= height[j]) {
      i++
    } else {
      j--
    }
  }
  
  return max
}
```

**只出现一次的数字**

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

示例：

```js
输入: [2,2,1]
输出: 1

输入: [4,1,2,1,2]
输出: 4
```

思路：

如果我们对 0 和二进制位做 XOR 运算，得到的仍然是这个二进制位 (a ⊕ 0 = a)

如果我们对相同的二进制位做 XOR 运算，返回的结果是 0 (a ⊕ a = 0)

所以我们只需要将所有的数进行 XOR 操作，得到那个唯一的数字。

代码：

```js
function singleNumber(nums) {
  return nums.reduce((prev, next) => prev ^= next)
}
```

**整数反转**

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0 。

示例：

```js
输入: 123
输出: 321

输入: -123
输出: -321

输入: 120
输出: 21
```

思路：

巧用 JavaScript 类型转换，字符串和数组的内置方法。

代码： 

```js
function reverse(x) {
  let arr = x.toString().split('')
  let neg = ''

  if (arr[0] == '-') {
    neg = arr.shift()
  }
  while (arr[arr.length - 1] == '0') {
    arr.pop()
  }

  let res = Number(neg + arr.reverse().join(''))

  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
    return 0
  }
  return res
}
```

**电话号码的字母组合**

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png)

示例：

```js
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
```

思路：

排列组合问题，递归求解。

代码：

```js
function letterCombinations(digits) {
  if (digits == '') return []
  
  let map = {
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
  let res = []

  recursive('', 0, arr)
  return res

  function recursive(str, depth, arr) {
    let temp = arr[depth]
    depth++
    if (temp) {
      temp.forEach(item => recursive(str + item, depth, arr))
    } else {
      res.push(str)
    }
  }
}
```

**删除链表的倒数第 N 个节点**

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

```js
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

思路：

用数组保存每个链表节点的引用，`arr[arr.length - n - 1]` 为删除节点的前一个节点，注意头节点删除的情况。

代码：

```js
function removeNthFromEnd(head, n) {
  let curr = head
  let arr = []

  while (curr != null) {
    arr.push(curr)
    curr = curr.next
  }

  let node = arr[arr.length - n - 1]
  
  if (node) {
    node.next = node.next.next
  } else {
    head = head.next
  }
  return head
}
```

**括号生成**

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

```js
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

思路：

1. 暴力法，先生成排列组合后的所有括号字符串，再利用栈来判断有效的括号组合。

代码：

```js
function generateParenthesis(n) {
  let pair = ['(', ')']
  let res: string[] = []

  recursive(0, '')
  return res
  
  function recursive(depth, str) {
    depth++
    if (depth == 2 * n + 1) {
      if (isValid(str)) {
        res.push(str)
      }
    } else {
      pair.forEach(p => recursive(depth, str + p))
    }
  }

  function isValid(str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
      if (stack[stack.length - 1] + str[i] == '()') {
        stack.pop()
      } else {
        stack.push(str[i])
      }
    }
    return stack.length == 0
  }
}
```

2. 动态规划，当我们清楚所有 i < n 时括号的可能生成排列后，对与 i = n 的情况，我们考虑整个括号排列中最左边的括号。
它一定是一个左括号，那么它可以和它对应的右括号组成一组完整的括号 "( )" ，我们认为这一组是相比 n-1 增加进来的括号。

剩下的括号要么在这一组新增的括号内部，要么在这一组新增括号的外部（右侧）。

既然知道了 i < n 的情况，那我们就可以对所有情况进行遍历：

"(" + 【i=p时所有括号的排列组合】 + ")" + 【i=q时所有括号的排列组合】

其中 p + q = n-1，且 p q 均为非负整数。

事实上，当上述 p 从 0 取到 n-1，q 从 n-1 取到 0 后，所有情况就遍历完了。

代码：

```js
function generateParenthesis(n) {
  if (n == 0) return ['']
  if (n == 1) return ['()']

  let total = [['none'], ['()']]

  for (let i = 2; i < n + 1; i++) {
    let temp = []
    for (let j = 0; j < i; j++) {
      let l1 = total[j]
      let l2 = total[i - j - 1]

      for (let k1 of l1) {
        for (let k2 of l2) {
          if (k1 == 'none') k1 = ''
          if (k2 == 'none') k2 = ''
          temp.push('(' + k1 + ')' + k2)
        }
      }
    }
    total.push(temp)
  }

  return total[n]
}
```

**合并 K 个排序链表**

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例：

```js
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

思路：

递归 + 分治法，时间复杂度 O(nlogK) ，k 为链表总数，n 为合并两个链表所用时间，空间复杂度 O(n) 。

代码： 

```js
function mergeKLists(lists) {
  if (lists.length == 0) {
    return null
  }
  
  return merge(0, lists.length - 1)

  function merge(left, right) {
    if (left == right) {
      return lists[left]
    }

    let mid = left + ((right - left) >> 1)
    let l1 = merge(left, mid)
    let l2 = merge(mid + 1, right)

    return mergeTwoLists(l1, l2)
  }
}
```

**环形链表 2**

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表

示例：

```js
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
```

思路：

这里我们初始化两个指针 - 快指针和慢指针。我们每次移动慢指针一步、快指针两步，直到快指针无法继续往前移动。如果在某次移动后，快慢指针指向了同一个节点，我们就返回它。否则，我们继续，直到 while 循环终止且没有返回任何节点，这种情况说明没有成环，我们返回 null 。

给定阶段 1 找到的相遇点，阶段 2 将找到环的入口。首先我们初始化额外的两个指针： ptr1 ，指向链表的头， ptr2 指向相遇点。然后，我们每次将它们往前移动一步，直到它们相遇，它们相遇的点就是环的入口，返回这个节点。

代码：

```js
function detectCycle(head) {
  let slow = head
  let fast = head
  let start = head

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      while (slow != start) {
        slow = slow.next
        start = start.next
      }
      return slow
    }
  }
  
  return null
}
```

**下一个排列**

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

思路：

字典序

* 从数组右侧向左开始遍历，找是否存在 nums[i] < nums[i+1] 的情况
* 如果不存在这种 nums[i] < nums[i+1] 情况 ，for 循环会遍历到 i == 0（也就是没有下一个排列），此时按题意排成有序
* 如果存在，则从数组右侧找到第一个比 nums[i] 大的数字并交换位置，然后再将 i + 1 之后的数组按升序排列

代码：

```js
function nextPermutation(nums) {
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

  function reverse(start, end = nums.length - 1) {
    while (start < end) {
      swap(nums, start, end)
      start++
      end--
    }
  }
}
```

