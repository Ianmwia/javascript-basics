
//length property
let y = 'I am learning javascript';
console.log(y.length);

//trim
let x = '  remove white spaces  ';
console.log(x.trim())

//uppercase
console.log(y.toUpperCase());

// lowercase
console.log(y.toLowerCase());

// indexOf()
console.log(y.indexOf('learning'));


//lastIndexOf()
console.log(y.lastIndexOf('a'));


//slice
console.log(y.slice(2, 7));

// replace
console.log(y.replace('learning', 'teaching'));

//charAt
console.log(y.charAt(5));


//search
y = 'I am learning Javascript';
console.log(y.search('l'));

// concat
let a = 'hello';
let b = 'world';

console.log(a.concat(b));
console.log(a.concat(` ${b}`));

// repeat
let c = 'ha';
console.log(c.repeat(7));

console.log(`${c} `.repeat(3))

// raw or String raw 
let  funny = 'what are \n you doing tomorrow';
console.log(funny);

funny = String.raw` what are \n you doing tommorrow`;
console.log(funny);

//split
let colours = 'red, green, black, white';
console.log(colours.split());

//join
let group = [ 'red', 'green', 'black', 'white' ]
console.log(group.join('-'));