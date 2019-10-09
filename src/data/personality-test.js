var data = require('./personality-tables.json')

function random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

var personality = () => `A ${random(data.physical)} ${random(data.noun)} who is ${random(data.hook)} and ${random(data.adverb)} ${random(data.attitude)}`

console.log(personality())
console.log(personality())
console.log(personality())
console.log(personality())
console.log(personality())
console.log(personality())