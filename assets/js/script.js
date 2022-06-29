    // define variables to select elements

const startButton = document.getElementById("start");
const finishButton = document.getElementById("finish");
const restartButton = document.getElementById("restart");
const helloText = document.getElementById("hello");
const questionAnswerContainer = document.getElementById("question-answer-container");
const questionText = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const answerInfo = document.getElementById("answer-info");
const infoText = document.getElementById("info");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackText = document.getElementById("feedback-text");
const scoreFeedback = document.getElementById("score-feedback");
const restartText = document.getElementById("restart-text");

    // define variables to drive quiz

/**
 *  provides an index number for the current question, which is then incremented until all questions have been used
 */
let currentQuestionIndex;

/**
 * this variable is used to randomise the order of the questions found in the array of questions
 * and will create a new array in a different order each time it is used let shuffledQuestions
 */
 let shuffledQuestions;

    // event listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);