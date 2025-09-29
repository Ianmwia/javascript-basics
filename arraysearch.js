/*
const fruits = ['apple', 'orange', 'mango'];
console.log(fruits.indexOf('orange'))
console.log(fruits.indexOf('banana')) // -1 if not found
console.log(fruits.indexOf('Orange')) // its case sensitive
console.log(fruits.indexOf('orange, 1')) // its case sensitive

// lastIndexOf
console.log(fruits.lastIndexOf('orange'))

// includes
const fruits1 = ['apple', 'orange', 'mango'];
console.log(fruits1.includes('mango'))
console.log(fruits1.includes('papaya'))
console.log([].includes(NaN));
console.log([1,2, NaN].includes(undefined));

let fruits2 = [1,2, NaN];
console.log(fruits2.includes(undefined));

//find
const num = [4, 9, 16, 25, 36]
let first = num.find(x => x > 15.9);
console.log(first);

//findIndex
const num1 = [4, 9, 16, 25, 36]
let first1 = num1.findIndex(x => x > 10);
console.log(first1); // -1 if not found

//findLast
const num2 = [4, 9, 16, 25, 36]
let first2 = num2.findLast(x => x < 20);
console.log(first2); // undefined if not found
*/
// Sorting arrays and 
//sort array
const fruits4 = ['banana', 'mango', 'apple', 'cherry',];
fruits4.sort();
console.log(fruits4);

const num4 = [2, 180, 101, 90, 70,]; // does not work correctly on numbers, it used on arrays of strings
num4.sort();
console.log(num4); // use as integers as string and starts compare them without using functions

num4.sort(function(a,b){return a-b}) // a-b small to big, b-a is reverse
console.log(num4) // to sort you have to use a function

//reverse array - works on an already ordered list, you musr sort first before you reverse
fruits4.reverse()
console.log(fruits4);

//itterations
//for each
const numbers = [35, 46, 48, 49300];
let how_big = '';
numbers.forEach(myFunction);
function myFunction(value, index, array){
    how_big += value + 'big ones'
}
console.log(how_big);

fruits4.forEach(x =>{
    console.log(x)
})

// 
const nums1 = [35, 46, 1000, 3, 47];
const nums2 = nums1.map(myFunction);
function myFunction(value, index, array){
    return value + 4;
}
console.log(nums1)
console.log(nums2)

let nums3 = nums1.map(x =>{
    return x*4;
})
console.log(nums3);

//reduce method - a new array that has elemnts that meat a certain condition
const meth = [46,678,667,9,223,90]
let sum = meth.reduce(x =>{
    return  x < 50
})
console.log(sum);

const int = [2, 3, 5, 6, 7, 9]
const sum1 = int.reduce((x , y) => x / y);
console.log(sum1)

// filter method
const ages = [10, 12, 4, 30, 43]
const adult = ages.filter(checkAdults)
function checkAdults(ages){
    return ages >= 18
}
console.log(adult)
/*
const minors = ages.filter(ages => ages < 18)
console.log(minors);
*/
function minors(){
    const ages = [10, 12, 4, 30, 43]
    return ages.filter(cows => cows < 18)
    
}
const youngin = minors()
console.log(youngin)

const a = function(){
    const cash = [1,3,6,8,20,27, 35]
    return cash.filter( cash => cash > 18)
}
const b = a()
console.log(b)