import {commonWords} from './constants'

let answer = ''
let maxWrong = 6
let wrong = 0
let correct = []

// filter commonWords for words with three or more letters
const words = commonWords.filter (word => word.length > 2)

// select random word from words
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)]
}

// answer choices for user to select
function Btns() {
    let alphaBtns = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
        >
            ` + letter + `
        </button>
        `).join('')
    }
document.getElementById('btns').innerHTML = alphaBtns
Btns()