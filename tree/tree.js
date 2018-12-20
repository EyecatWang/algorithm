class Queue {
    constructor(){
        this.items = []
    }

    /**
     * 向队列尾部添加一个（或多个）新的项
     * @param element
     */
    enqueue(...element) {
        this.items.push(...element)
    }

    /**
     * 移除队列的第一个（排在队列最前面的）项，并返回被移除的元素。
     * @returns {*}
     */
    dequeue() {
        return this.items.shift()
    }

    /**
     * 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息）
     */
    front() {
        return this.items[0]
    }

    /**
     * 如果队列中不包含任何元素，返回true，否则返回false。
     */
    isEmpty(){return this.items.length === 0}

    /**
     * //返回队列包含的元素个数，与数组的length属性类似。
     * @returns {number}
     */
    size() {return this.items.length}
    clear() {
        this.items = []
    }
    toString() {
        return this.items.toString()
    }
}


class Node{
    constructor(data, parent = null, children = []){
        this.data = data
        this.parent = parent
        this.children = children
    }
}

class Tree {
    constructor(data) {
        this._root = null
    }
    init(data){
        this._root = new Node(data)
    }

    /**
     * 递归实现 对树进行深度优先遍历：
     * @param callback
     */
    traverseDF (callback) {
        (function recurse(currentNode){
            for(let i = 0; i < currentNode.children.length; i++) {
                recurse(currentNode.children[i])
            }
            callback(currentNode);
        })(this._root)

    }

    /**
     * 宽度优先遍历。
     * @param callback
     */
    traverseBF (callback) {
        let queue = new Queue()
        queue.enqueue(this._root)
        let currentNode = queue.dequeue();
        while (currentNode) {
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                queue.enqueue(currentNode.children[i]);
            }

            callback(currentNode);
            currentNode = queue.dequeue();
        }
    }

    /**
     * 基于两种方法查找某个具体的值的操作
     * @param callback
     * @param traversal
     */
    contains (callback, traversal) {
        traversal.call(this, callback)
    }
    add(value, toData, traversal){
        let node = new Node(value),
            parent,
            callback = (val) => {
                if (val === toData) {
                    console.log(val)
                    parent = val
                }
            }
        this.contains(callback, traversal);
        if (parent) {
            parent.children.push(node)
            node.parent = parent
        }else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }
}
let t = new Tree()
t.init(0)
// t.traverseBF((val) => {
// })

let i = 1
while (i<100) {
    t.add(i,0,t.traverseDF)
    i++
}
