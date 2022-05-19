//HTML element refrences
const quizContainer = document.getElementById('quizlet');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// Functions for displaying Quiz
function displayQuiz() {
    
    const output = [];
  
    // for each question...
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        //store the list of possible answers
        const answers = localStorage.setItem (answers);
  
        // and for each available answer...
        for(anwserLetter in currentQuestion.answers){
  
          // Answer and output push setup...& backticks so the words can be clickable...
          answers.push(
            `<label>
              <input type="checkbox" name="question${questionNumber}" value="${anwserLetter}">
              ${anwserLetter} :
              ${currentQuestion.answers[anwserLetter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // Combine the string
    quizContainer.innerHTML = output.join('');
  }
// Functions for showing results
function displayResults() {
    const resultsContainer = quizContainer.querySelectorAll('answer');
    let correctAnswerCount = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const resultContainer =resultsContainer[questionNumber];
        const userAnswer = (resultContainer.querySelector(selector) || {}).value;
        const selector = `input[name=question${questionNumber}]:checked`;
        // if the answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            correctAnswerCount++;
        }else []
        resultsContainer.innerHTML = `${correctAnswerCount} out of ${quizQuestions.length}`;
    });
}

// For calling displayQuiz
displayQuiz();

//Show results eventlistner
submitButton.addEventListener('click',showResults);

//Displaing Questions in array
const quizQuestions = [
    {
        question: 'Whiich is the type of Pop up box available in JavaScript?',
        answers: {
            a: 'Notice',
            b: 'Announce',
            c:  'Prompt',
            d: 'Declare'
        },
        correctAnswer: 'c'
    },
    {
    
        question: 'Which symbol is used for comments in Javascript?',
        answers: {
            a: '//',
            b: '-//-',
            c: '**',
            d: '\**'
        },
        correctAnswer: 'a'
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
    
        question: 'What is the correct place to insert a JavaScript?',
        answers: {
            a: 'The "Head" section',
            b: 'The "Body" section',
            c:  'Both the "Head" section and the "Body" section',
            d: 'All of the above'
        },
        correctAnswer: 'c'
    },
];