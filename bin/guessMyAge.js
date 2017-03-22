'use strict'

const ask = require('../lib/ask.js')

let answer = 0

answer = ask("What's your age?")

if (answer > 90) {
  console.log('You old fart!')
} else if (answer < 10) {
  console.log('Why are you on a computer? Go outside!')
} else if (answer > 10 && answer < 90) {
  console.log('How boring...')
}
