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

function answerQuestion() {

    
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("btn-option");
        button.addEventListener('click', selectAnswer);
        answerOptionsButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    })
}

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    setFeedback(selectedAnswer, correct);
    Array.from(answerOptionsButtons.children).forEach(button => {
        setFeedback(button, button.dataset.correct);
    });
    // conditional (ternary) operator: if the length of the shuffledQuestions array is greater than the currentQuestionIndex (i.e., if there are unused questions remaining), then remove the 'hide' class from the Next button so that the button displays to the user; otherwise, run the endQuiz function
    shuffledQuestions.length > currentQuestionIndex ? nextButton.classList.remove('hide') : endQuiz();
    // conditional (ternary) operator: if the correct answer has been selected, run the incrementCorrect function; otherwise, run the incrementIncorrect function
    correct ? incrementCorrect() : incrementIncorrect();
    showExtraInfo(shuffledQuestions[currentQuestionIndex-1]);
}