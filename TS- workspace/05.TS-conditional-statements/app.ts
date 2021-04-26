// if else , switch

// if else
let marks: number;
marks = 75;
let result:string = '';
if(marks <= 35){
    result = 'You Failed the exam';
}
else if(marks === 33){
    result  = 'You are on boundary Line';
}
else{
    result = 'You cleared the exam With good marks';
}
console.log(result);

// switch
let day: number = new Date().getDay();
let today:string = '';
switch(day){
    case 0: today = 'Sunday'; break;
    case 1: today = 'Monday'; break;
    case 2: today = 'Tuesday'; break;
    case 3: today = 'Wednesday'; break;
    case 4: today = 'Thursday'; break;
    case 5: today = 'Friday';break;
    case 6: today = 'Saturday';break;
    default : today = 'Invalid Day';break;
}
console.log(today);