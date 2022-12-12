// create questions 
var questions = [
    // {
    //     question: '', 
    //     answer: '',
    //     choices: [],
    // },
    // {
    //     question: '', 
    //     answer: '',
    //     choices: [],
    // },
    // {
    //     question: '', 
    //     answer: '',
    //     choices: [],
    // },
    {
        question: 'abc', 
        answer: 'abc',
        choices: ['abc', 'a', 'b', 'c'],
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
var time = questions.length * 15;
var timeEL = document.getElementById (
    'time'
)
var qIndex = 0
var choicesEL = document.getElementById (
    'choices'
)
// create event listener to start quiz
startButton.addEventListener ('click', startQuiz);
// clear the page of the intro, unhide the questions and start the timer
function startQuiz () {
    startScreen.classList.add("hide")
    questionsEL.removeAttribute("class")
    timer = setInterval(clock, 1000)
    timeEL.textContent=time;

    getQuestions()
}

// make function for clock
function clock () {
    time--;
timeEL.textContent=time;
}
// make questions come on the page
function getQuestions () {
var currentQ = questions[qIndex]
var questionTitle = document.getElementById (
    'question-title'
)
questionTitle.textContent = currentQ.question
choicesEL.innerHTML = '';
// create a forloop to go through the choices and create an element button and append to the choicesEL area
for(var i = 0; x < buttonsWanted; i++){
    var button = doc.createElement('button');
    button.setAttribute('text', 'yourtext');
    docFrag.appendChild(button);
  }
}