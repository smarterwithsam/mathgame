// Variables section
let mathProblems = [
    {question:"1 + 0", answer:"1"},
    {question:"1 + 1", answer:"2"},
    {question:"1 + 2", answer:"3"},
    {question:"1 + 3", answer:"4"},
    {question:"1 + 4", answer:"5"},
    {question:"1 + 5", answer:"6"},
    {question:"2 + 0", answer:"2"},
    {question:"2 + 1", answer:"3"},
    {question:"2 + 2", answer:"4"},
    {question:"2 + 3", answer:"5"},
    {question:"2 + 4", answer:"6"},
    {question:"2 + 5", answer:"7"},
    {question:"3 + 0", answer:"3"},
    {question:"3 + 1", answer:"4"},
    {question:"3 + 2", answer:"5"},
    {question:"3 + 3", answer:"6"},
    {question:"3 + 4", answer:"7"},
    {question:"3 + 5", answer:"8"},
    {question:"4 + 0", answer:"4"},
    {question:"4 + 1", answer:"5"},
    {question:"4 + 2", answer:"6"},
    {question:"4 + 3", answer:"7"},
    {question:"4 + 4", answer:"8"},
    {question:"4 + 5", answer:"9"},
    {question:"5 + 0", answer:"5"},
    {question:"5 + 1", answer:"6"},
    {question:"5 + 2", answer:"7"},
    {question:"5 + 3", answer:"8"},
    {question:"5 + 4", answer:"9"},
    {question:"5 + 5", answer:"10"},
];



let correct = 0
let incorrect = 0
let score = 0
let count = 0
let numberOfQuestions = 0


let mathProblemsArrayIndex = Math.floor(Math.random() * 30)
let currentQuestion = mathProblems[mathProblemsArrayIndex].question
let currentAnswer = mathProblems[mathProblemsArrayIndex].answer






// Initial DOM text
document.querySelector("#math-questions").textContent = currentQuestion
document.querySelector("#play-again-btn").hidden = true
document.querySelector(".main-div").hidden = true




// Click on enter button
document.getElementById("input-field").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#submit-btn").click();
  }
})



// Number of questions selection
function fiveQuestions() {
    numberOfQuestions = 5
    document.querySelector(".main-div").hidden = false
    document.querySelector("#five-btn").hidden = true
    document.querySelector("#ten-btn").hidden = true
}

function tenQuestions() {
    numberOfQuestions = 10
    document.querySelector(".main-div").hidden = false
    document.querySelector("#five-btn").hidden = true
    document.querySelector("#ten-btn").hidden = true
}




// Repetitive code functions included in the submit button function
function nextScreen() {
    setTimeout(() => { 
        document.querySelector("#input-field").value = ""
        
        mathProblemsArrayIndex = Math.floor(Math.random() * 30)
        currentQuestion = mathProblems[mathProblemsArrayIndex].question
        currentAnswer = mathProblems[mathProblemsArrayIndex].answer
        
        document.querySelector("#math-questions").textContent = currentQuestion
        document.querySelector("#response").textContent = ""
    }, 1000);
}


function endScreen() {
    setTimeout(() => { 
        document.querySelector("#input-field").hidden = true
        document.querySelector("#submit-btn").hidden = true
        document.querySelector("#correct-field").hidden = true
        document.querySelector("#incorrect-field").hidden = true
        document.querySelector("#play-again-btn").hidden = false
        document.querySelector("#input-field").value = ""
        document.querySelector("#math-questions").textContent = "Score:  " + parseInt(score)
        document.querySelector("#response").textContent = ""
    }, 1000);

}



// Submit button function
function nextQuestion() {
    if (document.querySelector("#input-field").value === currentAnswer) {
        document.querySelector("#response").textContent = "Correct!"
        correct++
        count++
        document.querySelector("#correct").textContent = correct
        score = (correct / numberOfQuestions)*100
        if (count < numberOfQuestions) {
            nextScreen()
        } else {
            endScreen()
        }
    
    } else {
        document.querySelector("#response").textContent = "Incorrect!"
        incorrect++
        count++
        document.querySelector("#incorrect").textContent = incorrect
        if (count < numberOfQuestions) {
            nextScreen()
        } else {
            endScreen()
        }
    }
}
