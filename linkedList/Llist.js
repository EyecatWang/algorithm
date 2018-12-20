class Node{
  constructor(data, prev = null, next = null) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

class List{
  constructor() {
    /**
     * 头节点
     * @type {null}
     */
    this.head = null
    /**
     * 尾节点
     * @type {null}
     */
    this.tail = null
    this.length = 0
  }
  init(data) {
    let node = new Node(data[0])
    this.head = node
    this.tail = node
    this.length = 1
    for (let i = 1; i < data.length; i++) {
      let temp = new Node(data[i])
      this.tail.next = temp
      temp.prev = this.tail
      this.tail = temp
      this.length ++
    }
  }
  append(data) {
    let node = new Node(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length += 1
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.length += 1
    }
  }
  insert(data, index) {

    if (index > this.length || index < 0) {
      throw new Error('index error')
    }
    if (!this.head) {
      throw new Error('linked is empty')
    }
    let node = new Node(data)
    if (index === 0) {
      node.next = this.head
      this.head.prev = node
      return
    }
    if (index === this.length){
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.length += 1
      return
    }

    let len = 0
    let p = this.head
    let p2 = null
    while (p.next && len < index) {
      len += 1
      p2 = p
      p = p.next
    }
    console.log(p.data)
    if (len === index) {
      p2.next = node
      node.next = p
      node.prev = p2
      p.prev = node
      this.length += 1
    }
  }
  delete (){}
}

