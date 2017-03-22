'use strict'

const ask = require('../lib/ask.js')

let count = 0
let answer = ''

while (answer !== 'Jeff') {
  answer = ask('Guess my name?')
  count = count + 1
  if (answer !== 'Jeff') {
    console.log('Sorry, try again!')
  }
}
console.log('You got it in ' + count + ' tries!')
