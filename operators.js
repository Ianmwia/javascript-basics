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

2 != 3 
5 !== 4 // strictly not equal
18 > 20 // greater than
30 < 20  // less than
4 >= 4 // greater than or equal to
5 <= 10

//3. LOGIAL OPERATORS - operation on logic and or not - determination of certain truths, equality or differences
//Logical And Operator - true if both sides are true (&&)

//isAbove && hasTicket;
 3 > 2 && 3 === 3;

 // Logical Or Operator (||)
 // returns false if all sides are false
 5 < 1 || 5 == 4;
 // or !true
 console.log(y > z || d == e);
 console.log(y < z && d > e);

 //TYPE CONVERSION == vs ===
 //change data types from one version to another

 //implicit type conversion - can lead to bugs
 let num;
 num = false +2; // true = 1, false = 0

 console.log(num);

 console.log('5' + 2); // type coersion 52 not 7
 console.log(typeof('5'));


 //Explicit type conversion
 let res = '43';
 console.log(typeof(res));
 res1 = Number(res);
 console.log(typeof(res1));
 

 //methods ends with ()

 let method = true;
 console.log(typeof(method));
 
 methodToNumber = Number(method);
 console.log(typeof(methodToNumber));
 
 methodToNumber = String(methodToNumber);
 console.log(typeof(methodToNumber));

 //

 let day = 22;
 dayToString = String(day); // type conversion with a method


  console.log(typeof(dayToString));

