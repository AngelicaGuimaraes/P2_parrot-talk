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

// define variables to drive quiz

let shuffledQuestions;
let currentQuestionIndex;



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
    // scoreArea.classList.remove('hide');
    // document.getElementById('right').textContent = 0;
    // document.getElementById('wrong').textContent = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("btn-option");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerOptionsButtons.appendChild(button);        
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerOptionsButtons.firstChild) {
        answerOptionsButtons.removeChild(answerOptionsButtons.firstChild)
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerOptionsButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function answerQuestion() {

}