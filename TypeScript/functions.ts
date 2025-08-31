function printname(name){
    console.log(name)
}

printname("chandan")

function printname1(name){
    return name
}

let name1=printname1("chandan")
console.log(name1)
console.log(printname1("chandan"))

console.log("******************************")

function add(a,b){
    return a+b
}
console.log(add(5,5))
let c=add(3,3)
console.log(c)

function add1(a:number,b:number){
     c=a+b
     return c
}
console.log(add1(4,4))


console.log("*******"+ "function expression"+"***********")
let add2=function (a,b){
    return a+b
}
let add3=function (a,b){
    console.log(a+b)
}
console.log(add2(2,2))
add3(3,3)

console.log("*******"+ "arrow function"+"***********")

let add4=(a,b)=>a+b

console.log(add4(5,3))

const greater=(a,b)=>{

    if(a>b)
        return "a is greater"
    else
    return "b is greater"
}

console.log(greater(5,6))
