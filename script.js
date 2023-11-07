const startButton = document.getElementById('start')
var count = 60;
var interval;

var start = document.getElementById('start');
var quiz = document.getElementById('quiz');

start.addEventListener('click', function() {
    start.style.display = 'none';
    quiz.style.display = 'block';
    
    console.log(start)
    console.log(quiz)

    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(function() {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            alert("You're out of time!");
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
  {
    question: "Q3?",
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
    question: "Q4",
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
    question: "Q5",
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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  ``;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
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
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    score--;
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  
  nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {currentQuestionIndex++;
if(currentQuestionIndex < questions.length) {
  showQuestion();
} else {
    showScore();
}
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {handleNextButton();
    } else {
        startQuiz();
    }}
);
startQuiz();
