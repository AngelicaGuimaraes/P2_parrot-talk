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
const infoText = document.getElementById("info");
const youAreRight = document.getElementById('you-are-right');
const thatWasWrong = document.getElementById('that-was-wrong');
const quizFeedback = document.getElementById("quiz-feedback");

// define variables to drive quiz
let shuffledQuestions;
let currentQuestionIndex;

// event listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayNextQuestion();
    clearShowInfoText();
});

//function to start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    infoText.innerHTML = "";
    restartButton.classList.add('hide');
    finishButton.classList.add('hide');
    startButton.classList.add('hide');
    helloText.classList.add('hide');
    quizFeedback.classList.add('hide');
    questionAnswerContainer.classList.remove('hide');
    scoreArea.classList.remove('hide');
    document.getElementById('right').textContent = 0;
    document.getElementById('wrong').textContent = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    displayNextQuestion();
}

//function to display questions
/**
 * removes the old content from the quiz area, selects the following question, then increments the current question index by 1
 */
function displayNextQuestion() {
    clearQuizArea();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * removes the Next button, extra information and old answer buttons from the quiz area
 */
function clearQuizArea() {
    nextButton.classList.add('hide');
    answerOptionsButtons.innerHTML = '';
}

/**
 * displays the next question and creates new answer buttons for it
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerOptionsButtons.classList.remove('hide');
    youAreRight.classList.add('hide');
    thatWasWrong.classList.add('hide');
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-option');
        answerOptionsButtons.appendChild(button);
        button.addEventListener('click', selectAnswer);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    });
}

/**
 * checks whether the selected answer is correct, chooses whether to increment the score or the number of incorrect answers and calls the function to display extra info about all possible answers
 */
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerOptionsButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (currentQuestionIndex == 9) {
        showEndPage()
      } else {
        nextButton.classList.remove('hide');
        correct ? addCorrect() : addIncorrect();
        infoText.classList.remove('hide');
        answerOptionsButtons.classList.add('hide');
        restartButton.classList.add('hide');
        finishButton.classList.add('hide');
        showInfoText(shuffledQuestions[currentQuestionIndex]);
      }    
}

function showInfoText(question) {
    infoText.innerText = question.info;
    questionElement.innerHTML = "";
}

function clearShowInfoText() {
    infoText.innerHTML = "";
}

function addCorrect() {
    let oldCorrect = parseInt(document.getElementById('right').innerText);
    document.getElementById('right').innerText = oldCorrect + 1;
    youAreRight.classList.remove('hide');
}

function addIncorrect() {
    let oldWrong = parseInt(document.getElementById('wrong').innerText);
    document.getElementById('wrong').innerText = oldWrong + 1;
    thatWasWrong.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    finishButton.classList.remove('hide');
}

/**
 * displays quiz end page with user's final score and feedback
 */
function showEndPage() {
    questionElement.innerHTML = "";
    answerOptionsButtons.innerHTML = '';
    correct ? addCorrect() : addIncorrect();
    infoText.innerText = question.info;
    showInfoText(shuffledQuestions[currentQuestionIndex]);
    scoreArea.classList.add('hide');
    finishButton.classList.remove('hide');
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', startQuiz);
    quizFeedback.classList.remove('hide');
    
// pulls the final score so that user feedback can be given. Again, the parseInt function is used so that an integer is returned rather than a string
    const finalScore = parseInt(document.getElementById('right').textContent);
    
// if statement to provide feedback to the user dependent on their score. Template literals (backticks) are used so that the finalScore variable can be included in the string, as well as providing a less error-prone way of including single quotes inside the string
    if (finalScore > 7) {
        document.getElementById('score-feedback').textContent = `Congratulations! You scored ${finalScore} / 10.`;
        document.getElementById('feedback-text').textContent = 'You are an expert!';
    } else if (finalScore > 4) {
        document.getElementById('score-feedback').textContent = `Not bad! You scored ${finalScore} / 10.`;
        document.getElementById('feedback-text').textContent = 'You have a good level of knowledge!';
    } else {
        document.getElementById('score-feedback').textContent = `You scored only ${finalScore} / 10.`;
        document.getElementById('feedback-text').textContent = 'Want to learn more about Brazil?';
    }
}