const readInput = require('../util/inputReader')

function twoNumbersSumUpTo(numbers, numberIndex, preambleLength) {
  for (let i = Math.max(0, numberIndex - preambleLength); i < numberIndex; ++i) {
    let a = numbers[i]

    for (let k = i + 1; k < numberIndex; ++k) {
      let b = numbers[k]

      if (a !== b && a + b === numbers[numberIndex]) {
        return true
      }
    }
  }

  return false
}

function solve1(lines, preambleLength = 5) {
  const numbers = lines.map(line => parseInt(line, 10))

  for (let i = preambleLength; i < numbers.length; ++i) {
    const number = numbers[i]
    if (!twoNumbersSumUpTo(numbers, i, preambleLength)) {
      return number
    }
  }

  return -1
}

function solve2(lines, preambleLength = 5) {
  const numbers = lines.map(line => parseInt(line, 10))
  const invalidNumber = solve1(lines, preambleLength)

  for (let i = 0; i < numbers.length; ++i) {
    const rangeStart = i
    let rangeEnd = i

    let result = numbers[i]
    for (let k = rangeStart + 1; k < numbers.length; ++k) {
      result += numbers[k]
      if (result === invalidNumber) {
        rangeEnd = k
        break
      }
    }

    i = rangeEnd

    if (result === invalidNumber) {
      const rangeNumbers = []
      for (let k = rangeStart; k <= rangeEnd; ++k) {
        rangeNumbers.push(numbers[k])
      }
      rangeNumbers.sort()
      return rangeNumbers[0] + rangeNumbers[rangeNumbers.length - 1]
    }
  }

  return -1
}

function solve(part, preambleLength = 25, input) {
  const lines = input.split('\n')

  if (part === 1) {
    return solve1(lines, preambleLength)
  }

  return solve2(lines, preambleLength)
}

module.exports = function (part, preambleLength) {
  return readInput(__dirname, part)
    .then(solve.bind(this, part, preambleLength))
}