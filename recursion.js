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