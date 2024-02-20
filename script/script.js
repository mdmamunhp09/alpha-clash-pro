let isAudio=false;
const audio=new Audio();

const artBoard=document.getElementById('artboard');
const modalBox=document.getElementById('modal-box');

function handleKeyboardButtonPress(event) {
    if(isAudio==false) return;
    const keyPress = event.key;
    const randomKey=getElementTextById('screen-result');

    if(keyPress==="Escape"){
        hideElementById('play-ground');
        showElementById('home-section');
        removeBackgroundById(randomKey)
    }
    if(keyPress===randomKey){
        const currentScore=getScoreAndLifeById('score-area')
       audio.src="../audio/success.mp3";
       audio.play();
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
        const updateLifeColor=updateLife/5*100;
        artBoard.style.background=`linear-gradient(#FFFFFFB3 ${updateLifeColor}% ,#ff000066)`

        setElementTextById('life-area',updateLife);
        audio.src="../audio/beep-03.mp3";
        audio.play();
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

function playGame() {
    hideElementById('home-section');
    showElementById('play-ground');
    hideElementById('final-score');
    setElementTextById('life-area',5);
    setElementTextById('score-area',0)
    continueGame()
    isAudio=true;
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const score=getScoreAndLifeById('score-area');
    setElementTextById('score-final',score);
    const currentAlphabet=getElementTextById('screen-result');
    removeBackgroundById(currentAlphabet);
    isAudio=false;
    artBoard.style.background=`linear-gradient(#FFFFFFB3 100%,#ff000066)`
  
}

function modalOpen(event){
   console.log(event)
   if(event.clientY<20){
    modalBox.style.display="flex";
   }
}

function modalClose(){
    modalBox.style.display="none"
}

document.body.onmousemove=modalOpen