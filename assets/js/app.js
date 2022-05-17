//HTML element refrences
const quizContainer = document.getElementById('quizlet');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// Functions for displaying Quiz
function displayQuiz() {}

// Functions for showing results
function displayResults() {}

// For calling displayQuiz
displayQuiz();

//Show results eventlistner
submitButton.addEventListener('click',showResults);

//Displaing Questions in array
const quizQuestions = [
    {
        question: 'insert question',
        answers: {
            a: 'insert',
            b: 'insert',
            c:  'insert',
            d: 'insert'
        },
        correctAnswer: 'insert letter above'
    },
    {
    
        question: 'insert question',
        answers: {
            a: 'Boolean',
            b: 'Number',
            c:  'insert',
            d: 'insert'
        },
        correctAnswer: 'insert letter above'
    },
    {
    
        question: 'Which is a JavaScript Data Type?',
        answers: {
            a: 'Boo Diddleys',
            b: 'Number',
            c:  'NaN',
            d: 'Unknown'
        },
        correctAnswer: 'b'
    },
    {
    
        question: 'insert question',
        answers: {
            a: 'insert',
            b: 'insert',
            c:  'insert',
            d: 'insert'
        },
        correctAnswer: 'insert letter above'
    },
]