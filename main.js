const { empty, withArgs } = require ('./eventbox')
const { duplicate, transform } = require ('./streambox')

console.log('******* EVENTBOX *********')
empty()
withArgs()

console.log('******* STREAMBOX *********')
duplicate('main.js')
transform (
    'eventbox.js', 
    /[a-z]/g,      
    (letter) => letter.toUpperCase(), 
  )