// for-loop

// print number 0-10
let result:string = '';
for(let i:number = 0; i<=10; i++){
    result +=`${i} `;
}
console.log(result);

// print tha number 0-20 diff. 2
result = '';
for(let i:number = 20; i >=0; i-=2){
    result +=`${i}`;
}
console.log(result);

// * pattern
result = '';
for(let i:number = 1; i<=5; i++){
    for(let j:number = 1; j<=i; j++){
        result  += ` * `;
    }
    result += `\n`;
}
console.log(result);

result = '';
for(let i:number = 1; i<=5; i++){
    for(let j:number = 1; j<=i; j++){
        result  += ` ${i} `;
    }
    result += `\n`;
}
console.log(result);

// While-loop

// print 0-10
let i:number = 0;
while(i <=10){
    console.log(i);
    i++;
}

i = 0;
let value:string = '';
while(i<=10) {
    value += ` ${i} `;
    i++;
}
console.log(value);

// print 20-0 diff 2
i=20;
value = '';
while(i >=0){
    value +=`${i}`;
    i -= 2;
}
console.log(value);

// print stars
result = '';
i = 1;
while(i <= 5){
    let j:number= 1;
    while(j <= i){
        result += ` * `;
        j++;
    }
    result +=`\n`;
    i++;
}
console.log(result);

// do-while
i = 20;
value = '';
do{
    i -= 2;
}
while(i>= 0){
    value +=`${i}`;
}
console.log(value);
