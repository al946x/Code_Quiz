// create questions 


// identify html for global variables
var startButton = document.getElementById (
    'start'
)
var startScreen = document.getElementById (
    'start-screen'
)

// create event listener to start quiz
startButton.addEventListener ('click', startQuiz);
// clear the page of the intro, unhide the questions and start the timer
function startQuiz () {
    startScreen.classList.add("hide")
}
// make function for clock