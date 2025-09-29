// if {condition}{
//     //code to be executed
// }

//if
let age;
age = 19;
if (age >= 18){
    console.log('welcome to the club')
}

//else
if (age >= 18){
    console.log('welcome to the club')
}
else {
    console.log('you are a minor')
}
 // if else
let accountType;
 if (accountType == 'Normal'){
    console.log('welcome back')
 }
 else if (accountType == 'Admin'){
    console.log('welcome to the admin console')
 }
 else {
    console.log('You do not have an account')
 }
/*
 const sum = function(a, b){
    return a + b
 }
 console.log(sum(3,6))

 let adding = (a, b) => a + b
 console.log(adding(4 , 7));
 */

 //ternary is a shorthand for if else statements

 //let text = 'minor';
// text = 'adult'

let text1
if (age >= 18){
    text = 'minor';

}
else  {
    text1 = 'adult'
}

// switch
let day;
if (day == 'monday'){
    console.log('Today is Monday, start of the week')
}
else if (day == 'Wednesday'){
    console.log('Middle of the week')
}
else (day == 'Wednesday');{
    console.log('Just  a regular day')
}
/*
switch(expression){
    case value1:
    //code block
    break;
    case value2:
    //code block
    break;
    case value1:
    //code block
    break;
}
*/


//ternary symbol ?
//let text = (condition) ? expression 1 : expression 2;
let text2 = (age < 18) ? 'minor' : 'adult';
console.log(text2);

//for loops
/*
let num;
num = 0
console.log(num)
num =1
console.log(num)
num =2
console.log(num)
num =3
*/
for(let i = 0; i <= 100; i++){ // takes in 3 parameters
    console.log(i);
}
for(let c = 20; c >= 0; c--){ // takes in 3 parameters
    console.log(c);
}

// while loop
/*while (condition){
    //code block
}
*/
let b = 8;
while (b <= 5){
    console.log(b)
    b++;
}

let x = 10;
do{
    console.log(x)
    x++
}while (x <= 24)

const a = function(a, b){
    return a+b
}
console.log(a(2,4))

const c = (a, b) => a-b

console.log(c(2,4))

// while do