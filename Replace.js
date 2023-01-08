const fs = require('fs')
const replace = fs.readFileSync('data.txt', 'utf-8')
let input = fs.readFileSync('input.txt', 'utf-8')
let Convert = replace.split('\n').map((line) => line.split(':'))
let output = input
Convert.forEach(([key, value]) => {
  output = output.replace(key, value)
  console.log(output)
})
console.log(Convert)
fs.writeFileSync('output.txt', output)
