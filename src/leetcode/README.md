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
  if (!head) return null

  let current = head
  let list = []
  let i = 0

  while (current.next != null) {
    let node = factory(current.val)
    if (i > 0) {
      node.next = list[i - 1]
    }
    list.push(node)
    i++
    current = current.next
  }

  let res = factory(current.val)
  res.next = list[list.length - 1]
  return res
  
  function factory(val) {
    return { val, next: null }
  }
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
    if (map[current.data] && map[current.data] === current) {
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

遍历链表，用数组收集链表中节点的值，用 `reverse` 与 `join` 方法判断是否为回文。

代码：

```js
function isPalindrome(head) {
  let current = head
  let list = []

  while (current.next != null) {
    list.push(current.data)
    current = current.next
  }

  list.push(current.data)
  
  return [...list].reverse().join('') === list.join('')
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

  for (var i = 0; i < arr.length; i++) {
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

