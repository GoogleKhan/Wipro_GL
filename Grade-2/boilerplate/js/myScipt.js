
let fetchBtn = document.getElementById("start-button");
document.getElementById("loader-view").style.display = "none"
let submitBtn = document.getElementById("submit-button")
submitBtn.setAttribute("disabled", "true")
fetchBtn.addEventListener("click", buttoneventlistener)

function optionEventListerner(e) {
    let submitBtn = document.getElementById("submit-button")
    submitBtn.disabled = false
    let children = document.getElementById("options-container").children
    for (child of children) {
        child.classList.remove('user-answer')
    }
    e.target.classList.add('user-answer')
}
var completeloadGlobal;

async function buttoneventlistener() {

    document.getElementById("start-button").style.display = "none"
    document.getElementById("pre-quiz-instructions").style.display = "none";
    document.getElementById("loader-view").style.display = "block"

    let questionid = document.getElementById('current-question-id').value
    let completeload = await fetch(`./data/db.json`)
}


let data, selectedOption;
window.addEventListener('load', onChallengeLoad);
document.getElementById("loader-view").style.display = "none"
document.getElementById('start-button').addEventListener('click',onStartTest); 
document.getElementById('options-container').addEventListener('click', selectAnswer);
document.getElementById('submit-button').addEventListener('click', onSubmit);

function onChallengeLoad() {
//document.getElementById('loader-view').style.display='none';
document.getElementById('quiz').style.display='none';
}

function onStartTest() {
document.getElementById('loader-view').style.display='block';
document.getElementById('pre-quiz-instructions').style.display ='none'; 
document.getElementById('start-button').style.display ='none'; 
document.getElementById( 'quiz').style.display = 'none';
document.getElementById('submit-button').setAttribute('disabled', true);
getQuestion();
}

function getQuestion() {
  let id = document.getElementById('current-question-id').value
}