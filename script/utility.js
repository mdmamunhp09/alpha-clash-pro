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


//random alphabet

function getRandomAlphabet() {
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetStr.split('');
    const randomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabetArray[randomNumber];
    return alphabet;
}

