function play() {
    hideElementById('home-section');
    showElementById('play-ground');
    hideElementById('final-score');
    setElementTextById('life-area',5);

    continueGame()
}



function handleKeyboardButtonPress(event) {
    const keyPress = event.key;
    const randomKey=getElementTextById('screen-result');
    if(keyPress===randomKey){
        const currentScore=getScoreAndLifeById('score-area')
       
        //update score
        const updateScore=currentScore+1;
       setElementTextById('score-area',updateScore); 
    }
    else{
        const currentLife=getScoreAndLifeById('life-area');
        // updateLife
        const updateLife=currentLife-1;
        setElementTextById('life-area',updateLife)

        if(updateLife===0){
            hideElementById('play-ground')
            showElementById('final-score')
        }
    }
    
    continueGame();
    removeBackgroundById(randomKey)
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const Alphabet = getRandomAlphabet();
    setElementTextById('screen-result', Alphabet);
    setBackgroundById(Alphabet);
}