/**

 @version: 0.0.1

 @Time    : 2018/12/26 下午6:20

 @Author  : wangxiaoye

 @Desc : ==============================================

 Life is Short I Use js!!!                      ===

 If this runs wrong,don't ask me,I don't know why;  ===

 If this runs right,thank god,and I don't know why. ===

 Maybe the answer,my friend,is blowing in the wind. ===

 ======================================================

 @Project : algorithm

 @FileName: reverseList.py

 @Software: WebStorm

 @Blog    ：
 */


/**
 * reverse list by this
 * @param node linked list
 * @returns {*} new linked list
 */
var reverseList = (node) => {
    if (!node || !node.next) {
        return node
    }
    let newH = reverseList(node.next)
    node.next.next = node
    node.next = null
    return newH
}
/**
 * test linked list by object return test
 * @type {{data: number, next: {data: number, next: {data: number, next: {data: number, next: null}}}}}
 */
let data = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: null
            }
        }
    }
}
//
// console.log(JSON.stringify(reverseList(data)))

/**
 * rever linked list by while
 * @param node linked list
 * @returns {*} new linked list
 */
var reverseListWhile = (node) => {
    let newN = null
    while (node) {
        let temp = node.next
        node.next = newN
        newN = node
        node = temp
    }
    return newN
}
// console.log(JSON.stringify(reverseListWhile(data)))
