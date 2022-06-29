    // define variables to select elements

const startButton = document.getElementById("start");
const finishButton = document.getElementById("finish");
const restartButton = document.getElementById("restart");
const helloText = document.getElementById("hello");
const questionAnswerContainer = document.getElementById("question-answer-container");
const questionText = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const scoreArea = document.getElementById("score-area");
const answerInfo = document.getElementById("answer-info");
const infoText = document.getElementById("info");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackText = document.getElementById("feedback-text");
const scoreFeedback = document.getElementById("score-feedback");
const restartText = document.getElementById("restart-text");

    // define variables to drive quiz

/**
 *  provides an index number for the current question
 */
let currentQuestion;
 
    // event listeners

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

    // functions

/**
 * hides the start button and intro text, and displays the quiz
 */
 function startQuiz() {
    currentQuestion = 0;
    startButton.classList.add('hide');
    helloText.classList.add('hide');
    questionAnswerContainer.classList.remove('hide');
    scoreArea.classList.remove('hide');
    document.getElementById('right').textContent = 0;
    document.getElementById('wrong').textContent = 0;
    displayNextQuestion();
}

function nextQuestion() {


}

function answerQuestion() {

    
}