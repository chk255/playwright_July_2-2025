import { clear } from "console"

let firstName="Chandan"
let lastName="Kumar"

let myName=`My Name is ${firstName} ${lastName}`
console.log(myName)
let multilineString=` My Name
is 
Chandan
Kumar`
console.log(multilineString)
console.log(myName)
console.log(myName.length)
console.log(myName.charAt(11))
let valuePresent=myName.includes('a',0)
console.log(valuePresent)
console.log(myName.indexOf('a'))
console.log(myName.lastIndexOf('a',20))