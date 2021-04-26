let colors:string[] = ['black','blue', 'green', 'silver'];
console.log(colors);

// normal for loop
let output:string = '';
for(let i:number = 0; i<colors.length; i++) {
    output += `${colors[i]} `;
}
console.log(output);

// for-in loop
output = '';
for(let index in colors){
    output += `${colors[index].toUpperCase()} `;
}

// for-of loop
output = '';
for(let color of colors) {
    output += `${color.toUpperCase()} `;
}
console.log(output);

// forEach function
output = '';
colors.forEach(function(color){
    output += `${color.toUpperCase()} `;
})
console.log(output);

// forEach function with arrow function
output = '';
colors.forEach((color) =>{
    output += `${color.toUpperCase()} `;
})
console.log(output);

// Objects Array
interface Employee{
    sno: string;
    name : string;
    age : number;
    designation : string;
    location : string;
}
let employees:Employee[] =[
    {
        sno : 'AA334',
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        location : 'Banglore'
    },
    {
        sno : 'AA434',
        name : 'John',
        age : 26,
        designation : 'HR',
        location : 'Bhopal'
    },
    {
        sno : 'AA424',
        name : 'Wilson',
        age : 66,
        designation : 'Director',
        location : 'Hyderabad'
    },
]
console.log(employees);
// junior from array
let juniorEmployee:Employee[] = [] as Employee[];
for (let employee of employees){
    if(employee.age <=30){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee)

// using filter function
let jrEmployees:Employee[] = employees.filter(employee => employee.age <=30);
console.log(jrEmployees);