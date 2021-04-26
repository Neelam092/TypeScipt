

interface IStudent{
    fName : string;
    lName : string;
    age : number;
    course : string;

    fullName : () => void;
    biography : () => void;
}
class Student implements IStudent{
    fName : string;
    lName : string;
    age : number;
    course : string;

    constructor(fName:string, lName:string, age:number,course:string){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.course = course;
    }
    public fullName():string{
        return `${this.fName} ${this.lName}`;
    }
    public biography():void{
        let bio:string = `Full Name : ${this.fullName()}
                          AGE : ${this.age}
                          COURSE : ${this.course}`;
        console.log(bio);
    }
}
let student = new Student('Arjun', 'Reddy', 45, 'MBBS');
student.biography();