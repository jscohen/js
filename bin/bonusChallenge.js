'use strict'

const ask = require('../lib/ask.js')

let name = ''

name = ask("What is Jon's last name?  You have ten tries to guess.")

for (let i = 0; i < 10; i++) {
  if (name === 'Cohen') {
    console.log('You got it!')
    break
  } else {
    console.log('Sorry, try again')
    name = ask("What is Jon's last name?")
  }
}

if (name === 'Cohen') {
  console.log('Good job!')
} else {
  console.log('No good, you did not guess right')
}
