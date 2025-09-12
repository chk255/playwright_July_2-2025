
class Calculator{

    //Constructor Overloading

    constructor(); // default constructor
    constructor(a:number, b:number); // parameterized Constructor

    constructor(a?:number,b?:number){

        if(a!==undefined && b!==undefined){
            console.log("Sum of a&b" ,(a+b))
        }
        else{
            console.log("Calling Default constrcutor")
        }

    }

    multiply(a:number,b:number):number
    multiply(a:number,b:number,c:number):number
    multiply(a:number,b:number,c?:number):number{
        if(c!=undefined){
            return a*b*c
        }
        else{
            return a*b
        }

    }


}
let obj=new Calculator();
const result=obj.multiply(2,3)
const result1=obj.multiply(2,3,4)
console.log(result)
console.log(result1)
//let obj1=new Calculator(2,4);