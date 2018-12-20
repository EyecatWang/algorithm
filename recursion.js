<<<<<<< HEAD
/**
 * 二分查找
 * @param data
 * @param target
 * @param low
 * @param high
 * @returns {*}
 */
var basic_fn = (data, target, low, high) => {
    if (low < high) {
        return -1
    }
    var mid = Math.ceil((low + high) / 2)
    if (data[mid] === target) {
        return mid
    } else if (data[mid] < target) {
        return basic_fn(data, target, mid + 1, high)
    } else {
        return basic_fn(data, target, low, mid - 1)
    }
}
=======
var binary_search = (data, target, low, high) => {
    if (low > high) {
        return false
    }
    let mid = Math.ceil((low + high) /2)
    if (target === data[mid]) {
        return mid
    } else if (target < data[mid]) {
        return binary_search(data, target, low, mid - 1)
    } else {
        return binary_search(data, target, mid + 1, high)
    }
}

let i = 0;
let arr = []
while (i<10000){
    arr.push(i)
    i++
}
console.log(binary_search(arr, 3333, 0, arr.length-1))
>>>>>>> 04c49030817107dffd14a76f23ff0f4795f03c29
