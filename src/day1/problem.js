const readInput = require('../util/inputReader')

function solve1(lines, target) {
  let a = 0
  let b = 0

  for (let i = 0; i < lines.length; ++i) {
    a = parseInt(lines[i].trim(), 10)

    for (let k = i + 1; k < lines.length; ++k) {
      b = parseInt(lines[k].trim(), 10)

      if (a + b === target) {
        return a * b
      }
    }
  }

  return undefined
}

function solve2(lines, target) {
  let a = 0
  let b = 0
  let c = 0

  for (let i = 0; i < lines.length; ++i) {
   a = parseInt(lines[i].trim(), 10)

   for (let k = i + 1; k < lines.length; ++k) {
     b = parseInt(lines[k].trim(), 10)

     for (let j = k + 1; j < lines.length; ++j) {
       c = parseInt(lines[j].trim(), 10)

       if (a + b + c === target) {
         return a * b * c
       }
     }
   }
  }

  return undefined
}

function solve(part, input) {
  const target = 2020
  const lines = input.split('\n')

  if (part === 1) {
    return solve1(lines, target)
  }

  return solve2(lines, target)
}

module.exports = function (part) {
  return readInput(__dirname, part)
    .then(solve.bind(this, part))
}