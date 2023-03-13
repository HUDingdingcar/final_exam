function sum(a, b, c) {
    return a + b + c;
}

const curry = function (fn) {
    let len = fn.length;
    return function t(...args) {
        const rel_len = args.length;
        if (rel_len >= len) {
            return fn(...args)
        } else {
            return function (...args2) {
                const arr = args.concat(args2);
                return t(...arr)
            }
        }
    }
}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3))