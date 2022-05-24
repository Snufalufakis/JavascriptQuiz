// Html elements
//Start Section
const start = document.querySelector("#start");
const guide = document.querySelector("#guide");
const exit = document.querySelector("#exit");
const continueBtn = document.querySelector("#continue");
const quiz = document.querySelector("#quiz");
const time = document.querySelector("#time");
const questionNo = document.querySelector("#questionNo");
const questionText = document.querySelector("#questionText");
const choice_que = document.querySelectorAll(".choice_que");
//Multiple Choices Of Questions
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
//correct and next Button
const total_correct = document.querySelector("#total_correct");
const next_question = document.querySelector("#next_question");
//Result Section
const result = document.querySelector("#result");
const points = document.querySelector("#points");
const quit = document.querySelector("#quit");
const startAgain = document.querySelector("#startAgain");

//
let index = 0;
let timer = 20;
let interval = 0;
let UserAns = undefined;
let correct = 0;

//Start and Exit button actions
start.addEventListener("click", () => {
  start.style.display = "none";
  guide.style.display = "block";
});

exit.addEventListener("click", () => {
  start.style.display = "block";
  guide.style.display = "none";
});

// Timer for quiz
function startTimer() {
  if (timer === 0) {
    clearInterval(interval);
    next_question.click();
  } else {
    timer--;
    time.innerHTML = timer;
  }
}
//ToDo: 20 seconds timer, if answer is wrong -5 seconds

function questionData() {
  questionNo.innerText = index + 1 + ". ";
  questionText.innerText = qQuestions[index].question;
  option1.innerText = qQuestions[index].choice1;
  option2.innerText = qQuestions[index].choice2;
  option3.innerText = qQuestions[index].choice3;
  option4.innerText = qQuestions[index].choice4;

  //    timer start
  timer = 20;
}

questionData();

// When 'Continue' Button is clicked trigger display change
continueBtn.addEventListener("click", () => {
  quiz.style.display = "block";
  guide.style.display = "none";

  interval = setInterval(startTimer, 1000);
  questionData();

  choice_que.forEach((removeActive) => {
    removeActive.classList.remove("active");
  });

  total_correct.innerHTML = `${(correct = 0)} Out Of ${
    qQuestions.length
  } Questions`;
});
// selecting a choice will activate correct
choice_que.forEach((choices, choiceNo) => {
  choices.addEventListener("click", () => {
    choices.classList.add("active");
    //check answer
    if (choiceNo === qQuestions[index].answer) {
      correct++;
    } else {
      correct += 0;
    }
    //stop Counter
    clearInterval(interval);

    //disable All Options When User Select An Option
    for (i = 0; i <= 3; i++) {
      choice_que[i].classList.add("disabled");
    }
  });
});

// If next question is strickly not equal to current question goto next question.
next_question.addEventListener("click", () => {
  if (index !== qQuestions.length - 1) {
    index++;
    choice_que.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    questionData();

    //result
    total_correct.style.display = "block";
    total_correct.innerHTML = `${correct} Out Of ${qQuestions.length} Questions`;
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
  } else {
    index = 0;

    //when Quiz Question Complete Display Result Section
    clearInterval(interval);
    quiz.style.display = "none";
    points.innerHTML = `You Got ${correct} Out Of ${qQuestions.length}`;
    result.style.display = "block";
  }
  for (i = 0; i <= 3; i++) {
    choice_que[i].classList.remove("disabled");
  }
  // store score in localStorage
  localStorage.setItem(points);
});

//Initials input
var saveButton = document.getElementById("save");
saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var nameInput = {
    initials: nameSave.value,
  };
  //store initials in localStorage
  localStorage.setItem("nameInput", JSON.stringify(nameInput));
});

//what happen when 'Quit' Button Will Click
quit.addEventListener("click", () => {
  start.style.display = "block";
  result.style.display = "none";
});

//Start Again clicked
startAgain.addEventListener("click", () => {
  guide.style.display = "block";
  result.style.display = "none";
});
