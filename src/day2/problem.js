const readInput = require('../util/inputReader')

function solve1(lines) {
  let numberOfValidPasswords = 0

  for (let i = 0; i < lines.length; ++i) {
    const [pattern, password] = lines[i].trim().split(':')
    const [occurenceRange, character] = pattern.trim().split(' ')

    const [min, max] = occurenceRange.trim().split('-')
    const minNumber = parseInt(min, 10)
    const maxNumber = parseInt(max, 10)

    let occurences = 0
    for (let k = 0; k < password.length; ++k) {
      if (password[k] === character) {
        ++occurences
      }
    }

    if (occurences >= minNumber && occurences <= maxNumber) {
      ++numberOfValidPasswords
    }
  }

  return numberOfValidPasswords
}

function solve2(lines) {
    let numberOfValidPasswords = 0

  for (let i = 0; i < lines.length; ++i) {
    const [pattern, password] = lines[i].trim().split(':')
    const [occurenceRange, character] = pattern.trim().split(' ')

    const [min, max] = occurenceRange.trim().split('-')
    const firstPositionIndex = parseInt(min, 10) - 1
    const lastPositionIndex = parseInt(max, 10) - 1

    if (password.trim()[firstPositionIndex] === character ^ password.trim()[lastPositionIndex] === character) {
      ++numberOfValidPasswords
    }
  }

  return numberOfValidPasswords
}

function solve(part, input) {
  const lines = input.split('\n')

  if (part === 1) {
    return solve1(lines)
  }

  return solve2(lines)
}

module.exports = function (part) {
  return readInput(__dirname, part)
    .then(solve.bind(this, part))
}