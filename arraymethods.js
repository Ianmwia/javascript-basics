const fruits = ['banana', 'orange', 'apple', 'mango'];
console.log(fruits.length);

fruits.length = 3;
console.log(fruits);
//append an array
fruits[fruits.length] = 'kiwi';
console.log(fruits)

//array to string
const fruits1 = ['banana', 'orange', 'apple', 'mango'];
let str1 = fruits1.toString();
console.log(str1);

//array join
let result = fruits.join('|')
console.log(result)

//Array at
const fruits2 = ['banana', 'orange', 'apple', 'mango'];
console.log(fruits2.at(-2))

// Array pop
const fruits3 = ['banana', 'orange', 'apple', 'mango'];
let removed =fruits3.pop(); // last in first out
console.log(fruits3) // to check parse removed

//array push
const fruits4 = ['banana', 'orange', 'apple', 'mango'];
let newlength = fruits4.push('cow');
console.log(fruits4);

// array shift - removes the first array
const fruits5 = ['banana', 'orange', 'apple', 'mango'];
let removed1 = fruits5.shift();
console.log(fruits5);

// array shift - removes the first array
const fruits6 = ['banana', 'orange', 'apple', 'mango'];
let newNewLength = fruits6.unshift();
console.log(fruits6);

//Merging Arays
//array concat - merge 2 arrays
const girls = ['jeaneatte', 'jane', 'diana']
const boys = ['alvin', 'theodore' , 'simon']
const students = girls.concat(boys);
console.log(students.map(name => name.toUpperCase()));

//array copyWithin - take in range
const fruits7 = ['banana', 'orange', 'apple', 'mango'];
let newNewArray = fruits7.copyWithin(2, 3); // so index 2 is replaced by index 3
console.log(newNewArray);

//splicing and splicing
const fruits8 = ['banana', 'orange', 'apple', 'mango'];
let neeArray = fruits8.splice(2, 1,'lemon', 'kiwi'); // from index, truncate 0 none
console.log(fruits8)

//arrat tosplice()
const months = ['jan', 'feb', 'mar', 'mar'];
const newMonth = months.toSpliced(0,1, 'January')
console.log(months);
console.log(newMonth);

// array slice
const fruits9 = ['banana', 'orange', 'apple', 'mango'];
let citrus = fruits9.slice(1, 3); // indexing, length
console.log(citrus);

//array flat
const deepNested = [1,[2,[3,[4, 5]]]];
const flat1 = deepNested.flat(3);
console.log(flat1);