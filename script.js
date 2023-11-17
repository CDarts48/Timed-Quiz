// const startButton = document.getElementById("startButton");
// var count = 60;
// var interval;

// var start = document.getElementById("start");
// var quiz = document.getElementById("quiz");

// var currentQuestion = 0;
// var totalQuestions = 5;

// var highScoresarray = JSON.parse(localStorage.getItem("highScores")) || [];

// var timeLeft ;

// start.addEventListener("click", function () {
//   start.style.display = "none";
//   // quiz.style.display = 'block';
//   quiz.removeAttribute("class");
//   var interval = setInterval(function () {
//     document.getElementById("count").innerHTML = count;
//     if (currentQuestion === totalQuestions || count <= 0) {
//       clearInterval(interval);
//       document.getElementById("count").textContent = "Time's up!";
//       showScore();
//     } else {
//       document.getElementById("count").textContent =
//         count + " seconds remaining";
//       count--;
//     }
//   }, 1000);
// });

// const questions = [
//   {
//     question: "How do you declare a JavaScript variable?",
//     answers: [
//       { text: "kldshfasioefhnewionfw;", correct: false },
//       {
//         text: "In JavaScript, you can declare a variable using the var, let, or const;",
//         correct: true,
//       },
//       { text: "dsfklfjisadjfiewj;", correct: false },
//       { text: "dsjfadsijofdiosj", correct: false },
//     ],
//   },
//   {
//     question: "Q2?",
//     answers: [
//       { text: "kldshfasioefhnewionfw;", correct: false },
//       {
//         text: "In JavaScript, you can declare a variable using the var, let, or const;",
//         correct: true,
//       },
//       { text: "dsfklfjisadjfiewj;", correct: false },
//       { text: "dsjfadsijofdiosj", correct: false },
//     ],
//   },
//   // {
//   //   question: "Q3?",
//   //   answers: [
//   //     { text: "kldshfasioefhnewionfw;", correct: false },
//   //     {
//   //       text: "In JavaScript, you can declare a variable using the var, let, or const;",
//   //       correct: true,
//   //     },
//   //     { text: "dsfklfjisadjfiewj;", correct: false },
//   //     { text: "dsjfadsijofdiosj", correct: false },
//   //   ],
//   // },
//   // {
//   //   question: "Q4",
//   //   answers: [
//   //     { text: "kldshfasioefhnewionfw;", correct: false },
//   //     {
//   //       text: "In JavaScript, you can declare a variable using the var, let, or const;",
//   //       correct: true,
//   //     },
//   //     { text: "dsfklfjisadjfiewj;", correct: false },
//   //     { text: "dsjfadsijofdiosj", correct: false },
//   //   ],
//   // },
//   // {
//   //   question: "Q5",
//   //   answers: [
//   //     { text: "kldshfasioefhnewionfw;", correct: false },
//   //     {
//   //       text: "In JavaScript, you can declare a variable using the var, let, or const;",
//   //       correct: true,
//   //     },
//   //     { text: "dsfklfjisadjfiewj;", correct: false },
//   //     { text: "dsjfadsijofdiosj", correct: false },
//   //   ],
//   // },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next");

// let currentQuestionIndex = 5;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   ``;
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild)
//     answerButtons.removeChild(answerButtons.firstChild);
// }
// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//     count -= 10;
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });

//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   var endScreen = document.getElementById("end-screen");
//   endScreen.removeAttribute("class");
//   quiz.setAttribute("class", "hide");
//   var scoreEl = document.getElementById("score-html");
//   scoreEl.textContent = `Your score is ${score} out of ${questions.length}!`;
//   document
//     .getElementById("score-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//     console.log(timeLeft);
//       var initials = document.getElementById("submit").value;
//       var scoreObject = {
//         score:score * time, initials
//       };
//       highScoresarray.push(scoreObject);
//       localStorage.setItem("highScores", JSON.stringify(highScoresarray));
//     });
//     //  save button runs three times!!!!
//   //     var scoreButton = document.createElement('button');
//   //     scoreButton.innerHTML = "Record Your Scores";
//   //     scoreButton.onclick = function() {
//   //       console.log(score, this);
//   //       scoreButton.setAttribute('value', score);
//   //         // window.location.href = 'score.html?score=' + score;
//   //     };

//   //     scoreButton.style.display = "flex";
//   //     scoreButton.style.margin = "auto";
//   //     scoreButton.style.fontSize = "x-large";
//   //     scoreButton.style.background = "Purple";
//   //     scoreButton.style.color = "Yellow";

//   //     questionElement.appendChild(scoreButton);

//   //     nextButton.innerHTML = "Play Again";
//   //     nextButton.style.display = "block";
// }

// function saveScore() {
//   localStorage.setItem("score");
// }

// // window.onload = function() {
// //     var score = localStorage.getItem('score');
// //     var questionsLength = localStorage.getItem('score', score);
// //     document.getElementById('score').textContent = `Your score is ${score} out of ${questionsLength}!`;
// // }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   timeLeft = count
//   clearInterval(interval);
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     showScore();
//   }
// });

// var restart = document.getElementById("next");
// var clickCount = 0;

// restart.addEventListener("click", function () {
//   if (currentQuestionIndex === totalQuestions) {
//     count = 0;
//   }
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

// startQuiz();
