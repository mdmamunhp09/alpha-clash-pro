function play() {
    hideElementById('home-section');
    showElementById('play-ground')
    continueGame()
}

function handleKeyboardButtonPress(event) {
    const keyPress = event.key;

}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const Alphabet = getRandomAlphabet();
    setElementTextById('screen-result', Alphabet);
}