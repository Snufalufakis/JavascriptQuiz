//HTML element refrences
/*var resultsButton = document.getElementById('results');
var submitButton = document.getElementById('submit');*/
var nextButton = document.getElementById("nextButton");
var myQuestion = document.getElementById("question");
var myOptions = document.getElementById("options");

//Displaing Questions in array
var qQuestions = [
  {
    question: "Which is the type of Pop up box available in JavaScript?",
    answers: ["Notice", "Announce", "Introduce", "Declare"],
    correctAnswer: "Notice",
  },
  {
    question: "Which symbol is used for comments in Javascript?",
    answers: ["//", "-//-", "/*+*/", "**"],
    correctAnswer: "//",
  },
  {
    question: "Which is a JavaScript Data Type?",
    answers: ["Boo Diddleys", "Number", "NaN", "Unknown"],
    correctAnswer: "Number",
  },
  {
    question: "What is the correct place to insert a JavaScript?",
    answers: [
      'The "Head" section',
      'The "Body" section',
      'Both the "Head" section and the "Body" section',
      "All of the above",
    ],
    correctAnswer: 'Both the "Head" section and the "Body" section'
  },
];
// Functions for displaying Quiz
var i = 0;
var len = qQuestions.length;

function displayQuiz(i) {
  
  // for each question...
  var question = qQuestions[i].answers.length;
  for (var a = 0; a < question; a++) {
    // create choice selectors
    var option = document.createElement("li");
    var select = document.createElement("input");
    select.setAttribute("type", "radio");
    select.setAttribute("name", "question" + i);
    option.setAttribute("class", "option");
    var choice = document.createTextNode(qQuestions[i].answers[a]);
    
    myOptions.appendChild(option);
    option.appendChild(select);
    option.appendChild(choice);
    myQuestion.innerHTML = qQuestions[i].question;
  }
}
// For calling displayQuiz
displayQuiz(0);

//Button actions
nextButton.onclick = function () {
  var correct = 0;
  var radioList = document.getElementsByName("question" + i);
  var selected = false;

  //check if an answer was selected, if yes, correct
  for (var b = 0; b < radioList.length; b++) {
    if (radioList[b].checked) {
      selected = true;
      if (b === qQuestions[i].correctAnswer) {
        correct++;
      }
    }
  }
  if (!selected) {
    alert("please select a answer");
    return undefined;
  }
  //
  while (myOptions.firstChild) {
    myOptions.removeChild(myOptions.firstChild);
  }
  // show next grouping
  i++;
  //if it's not the last question, jump to the next one
  if (i < len) {
    displayQuiz(i); 
    
  } else {
    quiz.removeChild(nextButton);
    question.innerHTML = "Results:";
    var showScore = document.createElement("p");
    showScore.textContent = "You scored " + correct + "/" + len;
    quiz.appendChild(showScore);
  }
  function form() {
    /*Getting the number of text fields*/
    var notification = document.getElementById("initials").value;
    /*Generating text fields dynamically in the same form itself*/
    for(var i=0;i<notification; i++) {
        var textfield = document.createElement("input");
        textfield.type = "text";
        textfield.value = "Initials here";
        document.getElementById('form').appendChild(textfield);
    }

}
};

 