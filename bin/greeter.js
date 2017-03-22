'use strict'
// We'll learn about require later in the course
const ask = require('../lib/ask.js')

let name = ask("What's your name? ")
if (name === 'Jon') {
  console.log('You are the king of the world!!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else if (name === 'Chris') {
  console.log('Hi, Chris!')
} else {
  console.log('Hi, stranger.')
}
