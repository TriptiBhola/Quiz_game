

const questions = [
    {
        question: 'What is the capital of India?',
        answer: [
            { text: "Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Agara", correct: false },
            { text: "Bhopal", correct: false }
        ]
    },

    {
        question: 'Which is the largest desert in the world?',
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Sahara", correct: true },
            { text: "Gobi", correct: false }
        ]
    },

    {
        question: 'Which is the smallest continent in the world?',
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {

        question: 'Which is the largest animal in the world?',
        answer: [
            { text: "Shark", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: false },
            { text: "Blue whale", correct: true }
        ]
    },
    {
        question: 'Who is the father of Geometry?',
        answer: [
            { text: "Aristotle", correct: false },
            { text: "Euclid", correct: true },
            { text: "Pythagoras", correct: false },
            { text: " Kepler", correct: false }
        ]
    },
    {
        question: 'Who was known as Iron man of India?',
        answer: [
            { text: "Govind Ballabh Pant", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "PSubhash Chandra Bose", correct: false },
            { text: " Sardar Vallabhbhai Patel", correct: true }
        ]
    },
    {
        question: 'Wadia Institute of Himalayan Geology is located at',
        answer: [
            { text: "Delhi", correct: false },
            { text: "Shimla", correct: false },
            { text: "Pythagoras", correct: true },
            { text: " Kepler", correct: false }
        ]
    },
    {
        question: 'Who is the father of Geometry?',
        answer: [
            { text: "Aristotle", correct: false },
            { text: "Euclid", correct: true },
            { text: "Pythagoras", correct: false },
            { text: " Kepler", correct: false }
        ]
    },
    {
        question: 'Who is the father of Geometry?',
        answer: [
            { text: "Aristotle", correct: false },
            { text: "Euclid", correct: true },
            { text: "Pythagoras", correct: false },
            { text: " Kepler", correct: false }
        ]
    },
    {
        question: 'Who is the father of Geometry?',
        answer: [
            { text: "Aristotle", correct: false },
            { text: "Euclid", correct: true },
            { text: "Pythagoras", correct: false },
            { text: " Kepler", correct: false }
        ]
    }


];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disable = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()

    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});




startQuiz();

