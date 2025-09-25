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

