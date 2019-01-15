/**

 @version: 0.0.1

 @Author: wangxiaoye

 @Desc: 单向链表

 @Project: algorithm

 @FileName: LinkedList

 @Software: WebStorm

 @Blog：
 */

'use strict'
const LinkedListNode = require('./LinkedListNode')
export default class LinkedList {
    constructor() {
        /**
         * @var LinkedListNode
         */
        this.head = null
        /**
         * length
         * @type {number}
         */
        this.length = 0
    }

    /**
     * 初始化链表或者，批量添加节点
     * @param list
     */
    init(list = []) {
        if (!Array.isArray(list)) throw new Error('list must be a Array')
        let linked = this.head
        list.map(value => {
            let new_linked = new LinkedListNode(value)
            linked.next = new_linked
            linked = linked.next
            this.length+= 1
        })
        return this
    }

    /**
     * 向链表添加头节点
     * @param value
     * @returns {LinkedList}
     */
    prepend(value){
        const new_linked = new LinkedListNode(value, this.head)
        this.head = new_linked
        this.length+= 1
        return this
    }

    /**
     * 向后添加节点
     * @param value
     * @returns {LinkedList}
     */
    append(value){
        const new_linked = new LinkedListNode(value)
        this.length+= 1
        if (!this.head) {
            this.head = new_linked
            return this
        }
        this.head.next = new_linked
        return this
    }
}
