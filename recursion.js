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
