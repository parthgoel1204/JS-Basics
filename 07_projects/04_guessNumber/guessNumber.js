let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number !')
  }
  else if(guess < 1){
    alert('Please Enter a Number Greater than 1 !')
  }
  else if(guess > 100){
    alert('Please Enter a Number Less than 100 !')
  }
  else{
    prevGuess.push(guess);
    if(numGuess >= 10){
      displayGuess(guess);
      displayMessage(`Game Over !, The Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Congratulations ! You Guessed Correctly`);
    endGame();
    }
    else if(guess < randomNumber){
      displayMessage(`Wrong ! Too Low`);
    }
    else if(guess > randomNumber){
      displayMessage(`Wrong ! Too High`);
    }
}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML('<h2 id="newGame">Start New Game</h2>');
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function startGame(){
  let newGameButton = document.querySelector('#newGame');
  randomNumber = parseInt(Math.random()*100+1);
  prevGuess = [];
  numGuess = 1;
  guessSlot = '';
  remaining.innerHTML = `${10 - numGuess}`;
  lowOrHi.innerHTML = '';
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
}