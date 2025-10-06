//Accessing elements
const headerElement = document.getElementById('header')
headerElement.textContent = 'Welcome to DOM manipulation'

const nameChange = document.getElementById('para')
nameChange.textContent = 'Welcome to Electronic Arts';

//handling events -- events are actions that happen on the browser

const buttonElement = document.getElementById('btn')

//add eventlistener (action, then function)
buttonElement.addEventListener('click', function(){
    alert('You Clicked The Button')
} )

// manipulating styles in html
const myPara = document.getElementById('para2') // accessing the element
const colorButton = document.getElementById('color-button')
colorButton.addEventListener('click', function(){
    //change the colour of text
    myPara.style.color = 'blue';
    myPara.style.fontStyle = 'italic';
    myPara.style.fontSize = '30px';
})

// create new elements without creating of html elemements -- use createElement
const newParagraph = document.createElement('p');
//adding the text content
newParagraph.textContent = 'Woah, a new paragraph' // at this point nothing will display
// append  the new paragraph to the body of the document
document.body.appendChild(newParagraph)

// append button
const newParagraphButton = document.createElement('button')
newParagraphButton.textContent = 'BUTTON'
document.body.appendChild(newParagraphButton);

newParagraphButton.addEventListener('click', function(){
    newParagraph.style.backgroundColor = 'yellow'
    newParagraph.style.fontSize = '3rem'
});

// accessing elements using classes
const famClass = document.getElementsByClassName('family')
console.log(famClass[1]);



const workClass = document.getElementsByClassName('work')
console.log(workClass)

let famClassArray = [...famClass];
famClassArray.map(element => console.log(element))

//tag name
const allContacts = document.getElementsByTagName('p');
console.log(allContacts)

let allContactsArray = [...allContacts]
allContactsArray.map(stuff => console.log(stuff))

// queryselector & queryselector OR