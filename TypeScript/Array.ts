let arr1=[2,4,6,8]

let arr2=new Array(1,3,5,7,9)

let arr3=new Array()
arr3[0]="a"
arr3[1]="b"
arr3[2]="c"
arr3[3]="d"

//console.log(arr1)
//console.log(arr1.length)
console.log(arr2)
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>5){
    console.log(arr2[i])
    }
}
//console.log(arr3)

let email="chandan@gmail.com"
let domain=(email.split("@"))[1].split(".")[1]
console.log(domain)
console.log(arr1)
console.log(arr2)
arr2.push(12,13)
console.log(arr2)
//onsole.log(arr2.push(14)) need to check
console.log(arr2.pop())
console.log(arr2)
console.log(arr2.unshift(0))
console.log(arr2)
console.log(arr2.shift())
console.log(arr2)


console.log("**************splice********************")
arr2.splice(0,2)
console.log(arr2)
arr2.splice(0,0,1,3)
console.log(arr2)
console.log(arr2.splice(0,3))
console.log(arr2)
 //console.log(arr2.splice(-3))
// console.log(arr2.splice(3,2))
// console.log(arr2.splice(-2,3))
// console.log(arr2.splice(3))
console.log(arr2.splice(0,0,1,3,5))
console.log(arr2)

console.log("**************slice********************")
//arr2.slice(1,3)
console.log(arr2.slice(1,3))
console.log(arr2)
console.log(arr2.slice(-3))
console.log(arr2)
console.log(arr2.slice(3,1))
console.log(arr2)
console.log("**************Concat********************")
console.log(arr1.concat(arr2))







