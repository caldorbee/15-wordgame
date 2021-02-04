import {commonWords} from './constants'

let answer = ''
let maxWrong = 6
let wrong = 0
let guessed = []
let wordStatus = null


// filter commonWords for words with three or more letters
const words = commonWords.filter (word => word.length > 2)

// select random word from words
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)]
}

// create buttons for user input
function Btns() {
    let alphaBtns = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
            class="btn" '` + letter + `' onClick="handleGuess ('` + letter + `')">
            ` + letter + `
        </button>
        `).join('')
    document.getElementById('btns').innerHTML = alphaBtns
}

document.getElementById('max-wrong').innerHTML = maxWrong


function checkGuesses() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter : "_")).join('')

    document.getElementById('guess-check').innerHTML = wordStatus
}

// disable button after user clicks and register guesses
function handleGuess(letter) {
    guessed.indexOf(letter) == -1 ? guessed.push(letter) : null
    document.getElementById('letter').setAttribute('disabled', true)

    if (answer.indexOf(letter) >= 0) {
        checkGueses()
        checkForWin()
    } else  if (answer.indexOf(letter) == -1) {
        wrong++
        increaseWrong()
        checkForLoss()
    }
}

function increaseWrong () {
    document.getElementById('wrong'),innerHTML = wrong
}

function checkForWin() {
    if (wordStatus == answer) {
        alert ("You win!")
    }
}

function checkForLoss() {
    if (wrong == maxWrong) {
        alert ("You lose!")
    }
}

function reset () {
    wrong = 0
    guessed = []
    randomWord()
}

randomWord()
Btns()
checkGuesses()