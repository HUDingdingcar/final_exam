function double(a) {
    return a * a
}
function fn(arr, func) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        arr[i] = func(arr[i])
    }
    return arr
}

//每项平方
console.log(fn([1,2,3], double))
console.log([1,2,3].map(double))
//筛选出大于1的数
console.log([1,2,3].filter(b=>b>1))
//求和
let sum=[1,2,3].reduce(function(pre,cur){
    return pre+cur
},)
console.log(sum)