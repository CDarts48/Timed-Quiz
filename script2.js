const startButton = document.getElementById("start");
// startButton.addEventListener("click", startQuiz);
var count = 60;
var interval;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next");
var currentQuestionIndex = 5;
var isCorrect = 0;
var score = isCorrect + count;
var begin = document.getElementById("start");
var quiz = document.getElementById("quiz");
var currentQuestion = 0;
var totalQuestions = 5;
var initials = document.getElementById("initials");
var highScoresList = JSON.parse(localStorage.getItem("score")) || [];

var highScores = ("initials", "score");

startButton.addEventListener("click", function () {
  begin.style.display = "none";
  //   quiz.style.display = 'block';
  quiz.removeAttribute("class");
  var interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("count").textContent = "Time's up!";
      showScore();
    } else {
      document.getElementById("count").textContent =
        count + " seconds remaining";
      count--;
    }
  }, 1000);
});

const questions = [
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "Yoy type the word declare", correct: false },
      {
        text: "In JavaScript, you can declare a variable using the var, let, or const",
        correct: true,
      },
      { text: "You create a if statement", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What does this button * do in CSS?",
    answers: [
      { text: "Sets items to local storage", correct: false },
      {
        text: "Selects all elements on a page",
        correct: true,
      },
      { text: "Looks pretty", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      {
        text: "Variables can be declared in 4 ways. Automatically, Using var, let or const",
        correct: true,
      },
      {
        text: "Selects all elements on a page",
        correct: false,
      },
      {
        text: "You use declare prior to designating the variable ",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What does the siblings selector do in Jquery?",
    answers: [
      {
        text: "Get the siblings of each element in the set of matched elements, optionally filtered by a selector.",
        correct: true,
      },
      {
        text: "Selects all elements on a page",
        correct: false,
      },
      {
        text: "Get the parent of each element in the current set of matched elements, optionally filtered by a selector.",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What is a JavaScript Array?",
    answers: [
      {
        text: "It's a variable used to store big integer values that are too big to be represented by a normal JavaScript",
        correct: false,
      },
      {
        text: "An array is a special variable, which can hold more than one value",
        correct: true,
      },
      {
        text: "It is used to store big integer values that are too big to be represented by a normal JavaScript",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  ``;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  //   let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("button");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      // button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

nextButton.addEventListener("click", () => {
  timeLeft = count;
  clearInterval();
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
});

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild);
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    count -= 10;
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  var endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class");
  quiz.setAttribute("class", "hide");
  var scoreEl = document.getElementById("score-html");
  scoreEl.textContent = `Your score is ${score * count}!`;
  // .getElementById("score-form")

  document.addEventListener("submit", function (event) {
    event.preventDefault();
    var scoreObject = {
      initials: initials.value,
      score: score * count,
    };
    let scoreList = JSON.parse(localStorage.getItem("highScores")) || [];
    //   var initialsEL = document.getElementById("initials");
    //   var score = isCorrect * count;
    // displayScore(score * count);
    // scoreList.push(scoreObject);
    localStorage.setItem("highScores", JSON.stringify(scoreList));
    document.location.replace("score.html");
  });
  console.log(timeLeft);
  console.log(score);

  // var (highScore = "score")
}

//   questionElement.appendChild(scoreButton);

//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
console.log(score);
function saveScore() {
  localStorage.setItem("scoreObject");
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function displayScore() {}

// not correct
// var restart = document.getElementById("next");
// var clickCount = 0;

// restart.addEventListener("", function () {
// //   if (currentQuestionIndex === totalQuestions) {
// //     count = 0;
// //   }
//   if (count === 0 || currentQuestionIndex === totalQuestions) {
//     showScore();
//   } else if (clickCount >= 6) {
//     return;
//   }
// });

// var highScore = document.getElementById("score");
// nextButton.innerHTML = "Play Again";
// nextButton.style.display = "block";
// console.log(score);

startQuiz();
