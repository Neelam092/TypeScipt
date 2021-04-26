interface Mobile{
    brand : string;
    color : string;
    price : number
}
let mobileObj:Mobile= {
   brand : 'Apple',
    color : 'Silver',
    price : 32000
};
console.log(mobileObj);

console.log(mobileObj.brand);

// Nested obj
interface Address{
    street : string;
    city : string;
    state : string;
   country : string;
}
interface Student{
    name :string;
    age : number;
    course : string;
    address : Address
}
let student:Student = {
    name : 'Neelam',
    age : 22,
    course : 'B.tech',
    address : {
        street : 'Goukulpuri',
        city : 'Bhopal',
        state : 'Madhya Pradesh',
        country : 'India'
    }
};
console.log(student);

console.log(student.age);
console.log(student.address.state);