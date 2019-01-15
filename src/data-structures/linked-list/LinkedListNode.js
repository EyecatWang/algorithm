/**

 @version: 0.0.1

 @Author: wangxiaoye

 @Desc: ==============================================

 Life is Short I Use js!!!===

 If this runs wrong,don't ask me,I don't know why; ===

 If this runs right,thank god,and I don't know why. ===

 Maybe the answer,my friend,is blowing in the wind. ===

 ======================================================

 @Project: algorithm

 @FileName: LinkedListNode

 @Software: WebStorm

 @Blog：
 */

'use strict'
/**
 * @class 创建node节点
 */
export default class LinkedListNode{

    constructor(value, next=null) {
        this.value = value
        this.next = next
    }

    /**
     * value 转化为字符串或者 callback(this.value)
     * @param callback fn
     * @returns {string}
     */
    toString(callback) {
        return callback? callback(this.value) : `${this.value}`
    }
}
