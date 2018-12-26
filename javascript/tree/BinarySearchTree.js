/**
 *
 */

//定义节点
class Node {
    constructor(data){
        this.data = data;
        this.left = null;  //xiao
        this.right = null  //da
    }
}
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


class BinarySearchTree {
    constructor(){
        this.root = null
    }

    /**
     * 插入节点
     * @param data
     */
    insert(data) {
        const newNode = new Node(data);
        const insertNode = (node, newNode) => {
            if(this.root === null) {
                this.root = newNode
            } else {
                if(node.data > newNode.data) {
                    if (node.left === null) {
                        node.left = newNode
                    } else {
                        insertNode(node.left,newNode)
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode
                    } else {
                        insertNode(node.right,newNode)
                    }
                }
            }
        }
        insertNode(this.root, newNode)
    }
    /**
     * 节点遍历---》 中序遍历
     * @returns {Array}
     */
    inOrder(){
        let backs = [];
        const inOrderNode = (node,callback) => {
            if(node !== null){
                inOrderNode(node.left,callback);
                backs.push(callback(node.data));
                inOrderNode(node.right,callback)
            }
        };
        inOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }

    /**
     * 前序遍历
     * @returns {Array}
     */
    preOrder(){
        let backs = [];
        const preOrderNode = (node,callback) => {
            if(node !== null){
                backs.push(callback(node.data));
                preOrderNode(node.left,callback);
                preOrderNode(node.right,callback)
            }
        };
        preOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }

    /**
     * 后序遍历
     * @returns {Array}
     */
    postOrder(){
        let backs = [];
        const postOrderNode = (node,callback) => {
            if(node !== null){
                postOrderNode(node.left,callback);
                postOrderNode(node.right,callback);
                backs.push(callback(node.data))
            }
        };
        postOrderNode(this.root,callback);
        function callback(v){
            return v
        }
        return backs
    }

    /**
     * 找到最小节点
     * @param node
     * @returns {*}
     */
    getMin(node){
        const minNode = node => {
            return node? (node.left? minNode(node.left):node):null
        };
        return minNode( node || this.root)
    }

    /**
     * 查找最大节点
     * @param node
     * @returns {*}
     */
    getMax(node){
        const minNode = node => {
            return node? (node.right? minNode(node.right):node):null
        };
        return minNode(node || this.root)
    }

    /**
     * 移除节点
     * @param data
     * @returns {*|void}
     */
    remove (data) {
        const removeNode = (node,data) => {
            // 节点为空，直接返回
            if (node === null) return null
            if (node.data === data) {
                //  左右节点为空，直接返回
                if (node.left === null && node.right === null) return null
                // 左节点为空，直接让父节点等于右节点
                if (node.left === null) return node.right
                // 当右节点为空，直接让父节点等于右节点
                if (node.right === null) return node.left
                // 当左右节点都不为空的情况
                /**
                 * 中序迭代结果 ，后续节点为左侧节点的最小值，直接赋值父节点等于这个最小的节点，让后让右侧节点执行执行迭代
                 */
                if (node.right !== null && node.left !== null) {
                    let _node = this.getMin(node.right)
                    node.data = _node.data
                    node.right = removeNode(node.right, data)
                    return node
                }
            }
             else if(node.data > data) {
                node.left = removeNode(node.left,data)
                return node
            } else {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        return removeNode(this.root, data)

    }

    /**
     * 树的深度
     * @param root
     * @returns {*}
     */
    depth (root) {
        if (!root) return 0
        let left = this.depth(root.left)
        let right = this.depth(root.right)
        return left > right ? left + 1 : right + 1
    }
}
