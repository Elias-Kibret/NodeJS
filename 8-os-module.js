const os=require('os')
//info about currect user
const user=os.userInfo()
// console.log(user)
// Method returns the system uptime in seconds

// console.log(`Ths system Uptime is  ${os.uptime()}`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/1024,
    freeMem:os.freemem()/1024
}
console.log(currentOS)