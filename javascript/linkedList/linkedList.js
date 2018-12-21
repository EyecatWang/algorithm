

class Node {
    constructor(val, index=0){
        this.data = val
        this.next = index
    }
}

class LinkList{
    constructor(){
        this.head = 0
    }

    /**
     * 初始化
     * @param data
     */
    init(data) {
        this.head = new Node(data[0])
        let q = this.head
        for (let i = 1; i< data.length; i++) {
            let node = new Node(data[i])
            q.next = node
            q = q.next
        }
    }

    /**
     * get linked list length
     * @returns {number}
     */
    getLength() {
        let p = this.head
        let length = 0
        while (p) {
            length += 1
            p = p.next
        }
        return length
    }

    /**
     * lined list is empty?
     * @returns {boolean}
     */
    isEmpty(){
        let length = this.getLength()
        return  length? false: true
    }

    /**
     * 末尾添加
     * @param data
     */
    push(data){
        if (this.isEmpty()) {
            this.head = new Node(data)
        } else {
            let p = this.head
            while (p.next) {
                p = p.next
            }
            p.next = new Node(data)
        }
    }

    /**
     * 获取当前位置的值
     * @param index
     * @returns {*}
     */
    getitem(index) {
        if (this.isEmpty()) {
            return null
        } else {
            let p = this.head
            let length = 0
            while (p.next && length < index) {
                p = p.next
                length += 1
            }
            if (length === index) {
                return p.data
            } else {
                return null
            }
        }
    }

    /**
     * 删除index处的node
     * @param index
     * @returns {null}
     */
    delete (index) {
        if (this.isEmpty()) {
            return null
        }
        let p1 = this.head
        let p2 = this.head
        let length = 0
        while (p1 && length < index) {
            p2 = p1
            p1 = p1.next
            length += 1
        }
        if (length === index) {
            p2.next = p1.next
        }
    }

    /**
     * 遍历反转
     */
    listRorate() {
        // let p =this.head.next
        // let q = null
        // this.head.next = null
        // let pr = new Node()
        // while (p) {
        //     pr = p.next
        //     p.next = q
        //     q = p
        //     p = pr
        // }
        // this.head.next = q
        // console.log(this.head)
        let p = this.head
        let newH = null
        while (p) {
            let temp = p.next
            p.next = newH
            newH = p
            p = temp
        }
        this.head = newH
    }

    /**
     * 迭代反转
     * @param H
     * @returns {*}
     */
    reverseList (H) {
        if (!H || !H.next){
            return H
        }
        let newHead = this.reverseList(H.next)
        H.next.next=H
        H.next = null
        return newHead
    }

    /**
     * 插入
     * @param index
     * @param data
     * @returns {null}
     */
    insert (index, data) {
        if (this.isEmpty() || index < 0 || index > this.getLength()) {
            return null
        }
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        } else {
            let p1 = this.head
            let p2 = this.head
            let length = 0
            while (p1.next && length < index) {
                p2 = p1
                p1 = p1.next
                length += 1
            }
            if (length === index) {
                let node = new Node(data, p1)
                p2.next = node
            }
        }
    }

    /**
     * 添加有环链表
     * @param index
     */
    circleList(index) {
      let p = this.head
      let cur = null
      let len = 0
      while (p.next) {
        if (p.next) {
          p = p.next
        }
        if (len === index) {
          cur = p
        }
        len +=1
      }
      p.next = cur
      console.log(1)
    }

    /**
     * 判断是否有环链表
     * @returns {boolean}
     */
    is_circle(){
      let slow = this.head
      let fast = this.head.next
      while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
          console.log(fast)
          console.log(slow)
          return true
        }
      }
      return false
    }

    /**
     * 获取有环链表第一个入环节点
     * @returns {number|null|((value?: any) => IteratorResult<T>)|((value?: any) => Promise<IteratorResult<T>>)|Node|*}
     */
    fist_circle(){
      let slow = this.head
      let fast = this.head.next
      while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
          break
        }
      }
      fast = fast.next
      slow = this.head
      while (fast!=slow){
        fast = fast.next
        slow = slow.next
      }
      return fast
    }

    /**
     * 获取倒数第K个节点
     * @param k
     * @returns {*}
     */
    last_node(k) {
        if (this.getLength() < k) {
            return fase
        }
        let fast = this.head
        let slow = this.head
        let i = 0
        while(i< k-1) {
            fast = fast.next
            i++
        }
        while (fast && fast.next) {
            fast = fast.next
            slow = slow.next

        }
        if (slow) {
            return slow
        } else {
            return false
        }
    }
}


// var finiNode = (listNode) => {
//   var p = listNode
//   while (p) {
//     if (p && !p.next) {
//       return p
//     }
//     p = p.next
//   }
//   return null
// }
//
// let p1 = new LinkList()
// let p2 = new LinkList()
// let p1_fi = finiNode(p1.head)
// let p2_fi = finiNode(p1.head)
// console.log(p1_fi === p2_fi)


let p = new LinkList()

let arr = []
let i = 0
while (i<10) {
  arr.push(i)
  i++
}

p.init(arr)
console.log(p.last_node(5))




