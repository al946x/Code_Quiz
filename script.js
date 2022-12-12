// create questions 
var questions = [
    {
        question: '', 
        answer: '',
        choices: [],
    },
    {
        question: '', 
        answer: '',
        choices: [],
    },
    {
        question: '', 
        answer: '',
        choices: [],
    },
    {
        question: '', 
        answer: '',
        choices: [],
    }
]


// identify html for global variables
var startButton = document.getElementById (
    'start'
)
var startScreen = document.getElementById (
    'start-screen'
)
var questionsEL = document.getElementById (
    'questions'
)
var timer; 


// create event listener to start quiz
startButton.addEventListener ('click', startQuiz);
// clear the page of the intro, unhide the questions and start the timer
function startQuiz () {
    startScreen.classList.add("hide")
    questionsEL.removeAttribute("class")
    timer = setInterval(clock, 1000)
    getQuestions()
}

// make function for clock