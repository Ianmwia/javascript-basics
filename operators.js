// Assignement Operators
let x = 5;
y = 15;
z = 45;

sum = x + y + z;
console.log(sum);

let a = 'hello ';
let b = 'my name is ';
let c = 'Ian';

statement = a + b + c;
console.log(statement)

let who = 'My Name Is Ian, I am ';
age = 90;
course = ' Years old and I am Studying Javascript';

sentence = who + age + course;
console.log(sentence)

// js is node sensitive

let greetings = 'hello';
let Greetings = 'Hello world'; // these 2 are not the same

console.log(Greetings);

// variable naming
/*
can start with capital letters or small letter
can start with _
can start with $ 
But never a hyphen (-)
Can end with a number but cannot start with a number
PascalCase is not recommended
*/
// comparison, logical

//JS Operators
//1. Arithmetic Operators
// addition +, subtraction -, multiplacation *, division /, modulo(remainder of division) %
let d = 9;
let e = 7;

sum = d % e;
console.log(sum);
// expenential - to raise to a power (**)
exponent = d ** e;
console.log(exponent);

// increment (++) - increases by 1 value
console.log(++exponent);

// decrement (--) - decreases by 1 value
console.log(--exponent);

//2. ASSIGNMENT OPERATORS - the (=) sign is used to give reference of values to given variable

//Add and assigns +=
let m = 5;
m += 10; // same as 5 + 10
console.log(m);
m -= 2; // smame as 15 - 2
console.log(m); 

//3. COMPARISON OPERATORS - must have two things to compare
// the result is a boolean
// loose equality uses 2 equals (==)
//strict comprarison uses 3 equals (===)

// !(NOT)
