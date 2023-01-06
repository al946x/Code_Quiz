// create questions 
var questions = [
{
    question: "What is the correct HTML element tag for Javascript?",
    choices: ["script", "script.html", "script.element", "script.src"],
    answer: "script"
},


{
    question: "Which of these is not a boolean?",
    choices: [
        "true",
        "false",
        "all of the above",
        "none of the above"
    ],
    answer: "none of the above"
},

{
    question: "What is the correct way to declare a function in Javascript?",
    choices: [
        "function = myfunction()",
        "var function = myfunction()",
        "function myfunction()",
        "none of the above"
    ],
    answer: "function myfunction()"
},

{
    question: "Which one of the following is the correct tag for the header in HTML",
    choices: [
        "<heading>",
        "<header>",
        "<head>",
        "<headers>"
    ],
    answer: "<header>"
},

{
    question: "What is JavaScript?",
    choices: [
        "A language to add interactive features to the webpage",
        "A programe",
        "A language to style the webpage",
        "A set of codes"
    ],
    answer: "A language to add interactive features to the webpage"
},
];

// identify html for global variables
var startButton = document.getElementById (
    'start'
)
var choices = document.getElementById (
    'choices'
)
var startScreen = document.getElementById (
    'start-screen'
)
var endScreen = document.getElementById (
    'end-screen'
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
    // questionsEL.removeAttribute("class")
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
for(var i = 0; i < currentQ.choices.length; i++){
    var choice = currentQ.choices[i];
    var buttonEl = document.createElement('button');
    buttonEl.setAttribute('class', 'choice');
    buttonEl.setAttribute('value', choice);
    buttonEl.textContent = i + 1 + '. ' + choice;
    choices.appendChild(buttonEl);
  }
}
function userAnswer (event) {
  var btnChoices = event.target;
  if (!btnChoices.matches('.choice')) {
    return;
  }  
  if (btnChoices.value !== questions[qIndex].answer) {
    time -= 1; 
    if (time < 0) {
        time = 0;
    }
    timeEL.textContent=time;

  }
  qIndex++;
if (time <= 0 || qIndex === questions.length) {
    endGame();
} else {
    getQuestions();
}
}
function endGame () {
    alert('Your game has ended');
    clearInterval(timer); 
    questions.setAttribute("class", "hide"); 
    end-screen.removeAttribute("class");
    // hide question div and unhide end screen 
    // have the score at the end of the time and display it
}

choices.onclick = userAnswer;

// create an event listener to then go to another function that deals with the scores and initials 
// in the function identify the value of the input box 
// next line of the function define a variable that will = local storage get item or an empty array 
// create an object that is going to keep the value of the score and the initials 
// take the object variable and push it onto the array for local storage 
// create a local storage set item 
localStorage.setItem ('color', 'purple')
// do a window.location.href 
// in other page do a get local storage and display it 