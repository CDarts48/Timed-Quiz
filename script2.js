const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
var count = 60;
var interval;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
let currentQuestionIndex = 5;
let isCorrect = 0;
// let score = isCorrect + count;
console.log(isCorrect);
console.log(start, startQuiz, count);
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var currentQuestion = 0;
var totalQuestions = 2;
var highScoresarray = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById('highScoresarray');
start.addEventListener("click", function () {
  start.style.display = "none";
  // quiz.style.display = 'block';
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
      { text: "kldshfasioefhnewionfw;", correct: false },
      {
        text: "In JavaScript, you can declare a variable using the var, let, or const;",
        correct: true,
      },
      { text: "dsfklfjisadjfiewj;", correct: false },
      { text: "dsjfadsijofdiosj", correct: false },
    ],
  },
  {
    question: "Q2?",
    answers: [
      { text: "kldshfasioefhnewionfw;", correct: false },
      {
        text: "In JavaScript, you can declare a variable using the var, let, or const;",
        correct: true,
      },
      { text: "dsfklfjisadjfiewj;", correct: false },
      { text: "dsjfadsijofdiosj", correct: false },
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
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

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
  document
    .getElementById("score-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log(timeLeft);
      var initials = document.getElementById("initials").value;
      var scoreObject = {
        score: score * count,
        initials,
      };
      console.log(scoreObject);
      displayScore();
      highScoresarray.push(scoreObject);
      localStorage.setItem("highScores", JSON.stringify(highScoresarray));
      window.location.href = "score.html"
    });

    highScore.forEach(function(scoreObject) {
    var listItem = document.createElement('li');
    listItem.textContent = scoreObject.initials + ': ' + scoreObject.score;
    highScoresarray.appendChild(listItem);
  });
};

var tryAgainButton = document.getElementById('restart');
tryAgainButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});

//   questionElement.appendChild(scoreButton);

//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";


function saveScore() {
  localStorage.setItem("score");
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore () {}

window.onload = function(showScore) {
  var highScoresList = document.getElementById('scoreList');
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 5);

  highScores.forEach(function(scoreObject) {
    var listItem = document.createElement('li');
    listItem.textContent = scoreObject.initials + ': ' + scoreObject.score;
    highScoresList.appendChild(listItem);
  });
};

nextButton.addEventListener("click", () => {
  timeLeft = count;
  clearInterval();
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
});

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
