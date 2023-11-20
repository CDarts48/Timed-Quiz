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
var highScoresList = JSON.parse(localStorage.getItem("scoreList")) || [];

// var highScores = ("initials", "score"); redundant code the top scores is logging twice this was an attempt to fix it

startButton.addEventListener("click", function () {
  begin.style.display = "none";
  //   quiz.style.display = 'block';
  quiz.removeAttribute("class");
  var interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    if (currentQuestionIndex === totalQuestions || count <= 0) {
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
      { text: "You type the word declare", correct: false },
      {
        text: "You can declare a variable using the var, let, or const",
        correct: true,
      },
      { text: "You create a if statement", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What does this button do in CSS, *?",
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
    question: "What is the difference between let, var and const?",
    answers: [
      {
        text: "let and var are Jquery refrences and const refres to a css display",
        correct: false,
      },
      {
        text: "They select all elements on a page;",
        correct: false,
      },
      {
        text: "Var can be reassigned and redeclared; let can be reassigned but not redeclared; const can neither be reassigned nor redeclared.",
        correct: true,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "The Starting Point, The Step and The condition refer to what?",
    answers: [
      {
        text: "They are three distinct regions that make up a do while loop",
        correct: false,
      },
      {
        text: "They are three distinct regions that make up a while loop",
        correct: false,
      },
      {
        text: "They are three distinct regions that make up a for loop",
        correct: true,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What are comments?",
    answers: [
      {
        text: "Comments are thins we write as part of our code in order to communicate with other humans",
        correct: true,
      },
      {
        text: "It's the technical term for a computer error",
        correct: false,
      },
      {
        text: "It's how you push your code to the main stream in Gitgoing.io",
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
    scoreList.push(scoreObject);
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
