
class Student{

    Name:String;  // regular property
    readonly studentId:number;  // can only be assigned once inside constructor
    age:number;
    email?:String;   // optional property
    static schoolName:String= "MGVB Gaya";

    constructor(sName:String, sId:number,sAge:number,sEmail?:String){

        this.Name=sName;
        this.age=sAge;
        this.email=sEmail;
        this.studentId=sId;
    }

    studentGetInfo(){

        console.log(`${this.Name} having ${this.studentId} and ${this.email} is ${this.age}
             years old and studying in ${Student.schoolName}.`)

    }
   static changeSchoolName(scName:String):void{
        Student.schoolName=scName;
    }
}

let s=new Student("Chandan", 100 ,24 );
console.log(s.Name);
s.studentGetInfo();

let s1=new Student("Sujata", 101 ,25 , "chk@hgmail.com" );
console.log(s1.Name);
s1.studentGetInfo();

Student.changeSchoolName("KV No 1 Gaya");
console.log("****Student Details after Changing schoolName****")
console.log(s.Name);
s.studentGetInfo();
console.log(s1.Name);
s1.studentGetInfo();