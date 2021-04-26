// simple
let greet =(name:string):void =>{
    let message:string = `Hello!${name}`;
    console.log(message);
}
greet('Neelam');

// function with return type
let add = (a:number,b:number):number =>{
    let result:number = a+b+a+b;
    return result;
}
let output:number = add(10,20);
console.log(output);

// function with object type as parameter
interface Mobile{
    brand : string;
    color : string;
    price : number;
}
let printMobile = (mobile:Mobile):void =>{
    console.log(JSON.stringify(mobile));
};
let mobileOne:Mobile = {
    brand : 'Apple',
    color: 'silver',
    price: 32200

};
printMobile(mobileOne);