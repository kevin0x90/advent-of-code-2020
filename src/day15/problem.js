const readInput = require('../util/inputReader')

function solve1(lines) {
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const startingNumbers = line.split(',').map(num => parseInt(num, 10))

    const seen = {}

    let turn
    for(turn = 0; turn < startingNumbers.length - 1; ++turn) {
      if (seen[startingNumbers[turn]] === undefined) {
        seen[startingNumbers[turn]] = turn + 1
      }
    }

    ++turn
    let mostRecentNumber = startingNumbers[startingNumbers.length - 1]
    const previouslySpoken = {}

    for (turn += 1; turn <= 2020; ++turn) {
      if (seen[mostRecentNumber] === undefined) {
        seen[mostRecentNumber] = turn - 1
        mostRecentNumber = 0
      } else {
        const turnsApartPreviouslySpoken = previouslySpoken[mostRecentNumber] - seen[mostRecentNumber]
        seen[mostRecentNumber] = turn - 1
        mostRecentNumber = turnsApartPreviouslySpoken
      }
      previouslySpoken[mostRecentNumber] = turn
    }

    return mostRecentNumber
  }
}

function solve2(lines) {
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const startingNumbers = line.split(',').map(num => parseInt(num, 10))

    const seen = new Map()

    let turn
    for(turn = 0; turn < startingNumbers.length - 1; ++turn) {
      if (seen.get(startingNumbers[turn]) === undefined) {
        seen.set(startingNumbers[turn], turn + 1)
      }
    }

    ++turn
    let mostRecentNumber = startingNumbers[startingNumbers.length - 1]
    const previouslySpoken = new Map()

    for (turn += 1; turn <= 30000000; ++turn) {
      if (seen.get(mostRecentNumber) === undefined) {
        seen.set(mostRecentNumber, turn - 1)
        mostRecentNumber = 0
      } else {
        const turnsApartPreviouslySpoken = previouslySpoken.get(mostRecentNumber) - seen.get(mostRecentNumber)
        seen.set(mostRecentNumber, turn - 1)
        mostRecentNumber = turnsApartPreviouslySpoken
      }
      previouslySpoken.set(mostRecentNumber, turn)
    }

    return mostRecentNumber
  }
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