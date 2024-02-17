function hideElementById(elementId){
    const elementById=document.getElementById(elementId);
    elementById.classList.add('hidden')
}

function showElementById(elementId){
    const elementById=document.getElementById(elementId);
    elementById.classList.remove('hidden')
}