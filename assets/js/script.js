// define variables to select elements

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const restartButton = document.getElementById("restart");
const helloText = document.getElementById("hello");
const questionAnswerContainer = document.getElementById("question-answer-container");
const questionElement = document.getElementById("question-text");
const answerOptionsButtons = document.getElementById("options-buttons");
const scoreArea = document.getElementById("score-area");
const answerInfo = document.getElementById("answer-info");
const infoText = document.getElementById("info");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackText = document.getElementById("feedback-text");
const scoreFeedback = document.getElementById("score-feedback");
const restartText = document.getElementById("restart-text");
const answer1 = document.getElementById("btn1");
const answer2 = document.getElementById("btn2");
const answer3 = document.getElementById("btn3");
const answer4 = document.getElementById("btn4");


// define variables to drive quiz

let shuffledQuestions;
let currentQuestionIndex;
let score;



// event listeners

startButton.addEventListener('click', startQuiz);
// restartButton.addEventListener('click', startQuiz);

// functions

function startQuiz() {
    console.log('Started');
    currentQuestionIndex = 0;
    startButton.classList.add('hide');
    helloText.classList.add('hide');
    questionAnswerContainer.classList.remove('hide');
    scoreArea.classList.remove('hide');
    document.getElementById('right').textContent = 0;
    document.getElementById('wrong').textContent = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    /** answer1.innerHTML = questions(shuffledQuestions[currentQuestionIndex]).answers[0].text;
    answer2.innerHTML = questions(shuffledQuestions[currentQuestionIndex]).answers[1].text;
    answer3.innerHTML = questions(shuffledQuestions[currentQuestionIndex]).answers[2].text;
    answer4.innerHTML = questions(shuffledQuestions[currentQuestionIndex]).answers[3].text; **/
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    
}

function showAnswers() {
     
}

console.log(answer1.innerHTML);