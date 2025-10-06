// a function is a reusable block of code
// syntax - Function declaration
/*
function functionName('parameters,variable, argument, expressions'){
    //code to be executed
}
//call the function or invoke
*/
/*function greet(){
    console.log('hi')
}
greet();

//name functions can be called before declaring it - this means the function is hoisted

welcome();

function welcome() {
    console.log('welcome back');
}

function myName () {
    console.log('my name is Ian, Iam 70 years old and I am learning javacript ')
}
myName()
function who (name, age, studying) {
    console.log(`my name is ${name}`)
    console.log(`I am ${age} years old`)
    console.log(`and I am studying ${studying}`)
}
who('Ian', 70, 'javascript');

const whoelse = function (name, age, studying) {
    console.log(`my name is ${name}`)
    console.log(`I am ${age} years old`)
    console.log(`and I am studying ${studying}`)
}
whoelse('James', 80, 'web');

whoelse1 = (name, age, studying) => {
    console.log(`my name is ${name}`)
    console.log(`I am ${age} years old`)
    console.log(`and I am studying ${studying}`)
}
whoelse1('Tokio', 40, 'design');

//return keyword stops a function if you want the function to be reused

function name1(name){
    //console.log(`hello ${name}`)
    return `hello ${name}`
}
let result = name1('ian');
console.log(result);

//Function Expressions

const name2 = function (name){
    //console.log(`hello ${name}`)
    return `hello ${name}`
}
let result2 = name2('You');
console.log(result2);

//Arrow functions
name3 = (name) =>{
    //console.log(`hello ${name}`)
    return `hello ${name}`
}
let result3 = name3('KND Number 3');
console.log(result3);

name4 = (name, time) => `Welcome Back ${name}, You are ${time} minutes late`
console.log(name4('Daniel', 20))

//addition
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3,3));

//multiply
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(34, 80));

//divide
const divide = (num1, num2) => {
    return num1 / num2
}
console.log(divide(1400,15));
//subtract
const subtract = (num1, num2) => {
    return num1 - num2
}
console.log(subtract(90,389));


// functions with default parameters
const greet7 = (name = 'userName') => {
    return `Hello and Welcome ${name}`
}
console.log(greet7())
console.log(greet7('Anne'))
*/

//01102025
// Scope
//local scope - variable declared inside a function
//global scope - variable declared outside a function, available and accessible from everywhere, not recommended in a large program
// if both exists we will use local variable first
let globalVar = 'I"m global';
function showGlobal(){
    console.log(globalVar)
}
showGlobal()
console.log(globalVar)

let name = 'Global Name'

function introduce(){
    let name = 'Local Name'
    console.log(name)
}
introduce()
console.log(name)

//local scope
function testScope(){
    let localVar = `i'm local`;
    console.log(localVar)
}
testScope()
//console.log(localVar) -- will not work 

//block scope - these are variables declred with let and const inside the curly braces {}, var is not block scoped

//lexical scope

let NeighbourHoodLamp = 'street lamp'

function house(){
    let livingRoomLight = 'livingroom light';
    function bedroom(){
        let bedLamp = 'bedside lamp'
        console.log(NeighbourHoodLamp)
        console.log(livingRoomLight)
        console.log(bedLamp)

        
    }
    bedroom();
}
house()
function setCookie (name, value, timeInSeconds){
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${timeInSeconds}; path=/`
}
setCookie('email', 'alex@mail.com', 3600);
console.log(document.cookie);

sayHello();

function sayHello(){
console.log
(hello)
}