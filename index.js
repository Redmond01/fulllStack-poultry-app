
const { log } = console

const array =[10,10,10]
const tryReduce = array.reduce(function(prev, next){
    return prev+next
})
console.log(tryReduce)