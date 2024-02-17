function hideElementById(elementId) {
    const elementById = document.getElementById(elementId);
    elementById.classList.add('hidden')
}

function showElementById(elementId) {
    const elementById = document.getElementById(elementId);
    elementById.classList.remove('hidden')
}

function getElementTextById(elementId) {
    const ElementId = document.getElementById(elementId);
    const ElementText =ElementId.innerText.toLocaleLowerCase();
    return ElementText;
}



function setElementTextById(elementId, value) {
    const ElementId = document.getElementById(elementId);
    ElementId.innerText = value;
}

//get score 
function getScoreAndLifeById(elementId){
    const ElementId=document.getElementById(elementId);
    const score=parseInt(ElementId.innerText);
    return score;
}

//set keyboard background
function setBackgroundById(elementId){
    const AlphabetId=document.getElementById(elementId);
    AlphabetId.classList.add('bg-orange-400');
}

//remove keyboard background
function removeBackgroundById(elementId){
    const AlphabetId=document.getElementById(elementId);
    AlphabetId.classList.remove('bg-orange-400')
}
//random alphabet

function getRandomAlphabet() {
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetStr.split('');
    const randomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabetArray[randomNumber];
    return alphabet;
}

