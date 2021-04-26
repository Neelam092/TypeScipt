//string , number , boolean , null , undefined, object , array, void , any

// String
let employeeName:string = 'John';
console.log(employeeName);
console.log(`Employee Name: ${employeeName}`)

// Number
let employeeAge:number = 45;
console.log(employeeAge);

// Boolean
let isActiveEmployee:boolean = true;
console.log(isActiveEmployee);

// Null
let test:null = null;
console.log(test);

// Undefined
let task:undefined   = undefined;
console.log(task);

// Object
let mobile:object = {
    brand : 'apple',
    color : 'Silver',
    price : 24000
};
console.log(mobile);

// Array
let colors:string[] = ['white', 'black', 'green', 'blue'];
console.log(colors);

// void with function
let greet = (name:string):void =>{
    console.log(`Hello ${name}`);
}
greet('Neelam');

// Enum
enum Month {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY'
}
console.log(Month.JAN);

// Any (never use)
let a:any = 'test';
a = 10;
a = true;
console.log(a);