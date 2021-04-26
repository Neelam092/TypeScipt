//Arithmetic Operators
let num1:number = 10;
let num2:number = 30;
console.log(`Sum : ${num1 + num2}`);

// check even or odd
let digit:number = 16;
if(digit % 2 === 0){
    console.log('Even number');
}
else{
    console.log('Odd number');
}

// Shorthand math -> += , -= .....
let val1:number = 20;
let val2:number = 32;
let val3: number = 43;
val3 += val1 + val2;
console.log(val3);

// incr / decr
let x:number = 10;
x = x+1; //11
x += 1; //12
x++; //13
console.log(x);

//conditional
let marks: number;
marks = 75;
let result:string = '';
if(marks <= 35){
    result = 'You Failed the exam';
}
else{
    result = 'You cleared the exam';
}
console.log(result);

// logical
let inRelation:boolean = true;
let parentsAgreed:boolean = true;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until Parents Agreed');
}

// Ternary
marks = 85;
result = '';
(marks>= 35) ? result = 'You Cleared the exam' : result = 'You failed the exam';
console.log(result);