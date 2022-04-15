// const http=require('http')
// const server =http.createServer((req,res)=>{
//    res.write('<h1>welcome to home page</h1>')
//    res.end()
// }).listen(3000)
const _=require('lodash')
const items=[1,[2,[3,[4]]]]

const newItems=_.flattenDeep(items)
console.log(newItems)
