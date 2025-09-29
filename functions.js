// a function is a reusable block of code
// syntax - Function declaration
/*
function functionName('parameters,variable, argument, expressions'){
    //code to be executed
}
//call the function or invoke
*/
function greet(){
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
