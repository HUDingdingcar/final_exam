let func = function(){
    console.log(2);
}
// func = func.before((a=1) => {
//     console.log(a)
// }).after((b=3) => {
//     console.log(b);
// })
new Promise(function(resolve){
    console.log(1)
    resolve()
}).then(function(){
    console.log(3)
})
func()
//实现func.before()以及func.after()