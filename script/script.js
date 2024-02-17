function play() {
    hideElementById('home-section');
    showElementById('play-ground');
    hideElementById('final-score');
    setElementTextById('life-area',5);
    setElementTextById('score-area',0)
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
       removeBackgroundById(randomKey)
       continueGame();
    }
    else{
        const currentLife=getScoreAndLifeById('life-area');
        // updateLife
        const updateLife=currentLife-1;
        setElementTextById('life-area',updateLife);

        if(updateLife===0){
            gameOver();
        }
    }
    
  
}
document.addEventListener('keyup', handleKeyboardButtonPress)



function continueGame() {
    const Alphabet = getRandomAlphabet();
    setElementTextById('screen-result', Alphabet);
    setBackgroundById(Alphabet);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const score=getScoreAndLifeById('score-area');
    setElementTextById('score-final',score);
    const currentAlphabet=getElementTextById('screen-result');
    removeBackgroundById(currentAlphabet);
    console.log(currentAlphabet);
}