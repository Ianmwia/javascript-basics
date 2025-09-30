let score = 0;

function askQuestion(question, correctAnswer){
    const userAnswer = prompt(question);

    if(userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
        alert('correct');
        score++;
    }
    else{
        alert(`wrong the correct answer is ${correctAnswer}`)
    }

}

function showScore(){
    alert(`the final score is ${score} out of 3`);
}
const category = prompt('Choose a category : math, science, general knowledge');// array for mutable data
let question = [] // empty array to store questions
switch (category.toLowerCase()) { //good to treat all to lowercase
    case 'math':
        question = [ // nest key and value -- array of objects
            {q: 'what is 1 + 1', a:'2'},
            {q: 'what is the squareroot of 225', a: '15'},
            {q: 'what is the square of 9', a:'81'}
        ]
        break;
    case 'science':
        question = [ // nest key and value -- array of objects
            {q: 'what planet is known as the red planet', a:'mars'},
            {q: 'what is the chemical formula for water', a: 'H2O'},
            {q: 'the green coloring matter in plants is known as', a:'chlorophyll'}
        ];
        break;
    case 'general knowledge':
        question = [ // nest key and value -- array of objects
            {q: 'who was the first president of the Usa', a:'George washington'},
            {q: 'what is the capital city of France', a: 'Paris'},
            {q: 'what is the capita city of Turkey', a:'Ankara'}
        ];
        break;

    default:
        alert('invalid choice! Defaulting to general knowledge')
        question = [ // nest key and value -- array of objects
            {q: 'who was the first president of the Usa', a:'George washington'},
            {q: 'what is the capital city of France', a: 'Paris'},
            {q: 'what is the capita city of Turkey', a:'Ankara'}
        ];
}
// game loop
let i = 0;
while (i < question.length) {
    askQuestion(question[i].q, question[i].a)
    i++
}

showScore();