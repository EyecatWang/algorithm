export default class Node {
  constructor(val, next=null){
    this.data = val
    this.next = next
  }
}

export default class DouNode extends Node{
  constructor(val, next=null, prev = null, ){
    super(val, next)
    this.prev = prev
  }
}
