// Modules -Encapsulate Code (Only share minimum )
// CommonJS , evey file is module (by default)

const names=require('./4-name')
const sayHi=require('./5-utils')
const data=require('./6-alternative')
console.log(data)
require('./7-mind-grenade');
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
