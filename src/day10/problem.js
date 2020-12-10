const readInput = require('../util/inputReader')

function solve1(lines) {
  const numbers = lines.map(line => parseInt(line, 10))
  numbers.sort((a, b) => a - b)

  const differences = {
    '1': 0,
    '2': 0,
    '3': 1,
  }

  let jolts = 0

  for (let i = 0; i < numbers.length; ++i) {
    const number = numbers[i]

    const diff = Math.abs(jolts - number)
    if (differences[diff] !== undefined) {
      ++differences[diff]
      jolts = number
    }
  }

  return differences['1'] * differences['3']
}

function solve2(lines) {
  const numbers = lines.map(line => parseInt(line, 10))
  numbers.sort((a, b) => a - b)

  const differences = {
    '1': new Set(),
    '2': new Set(),
    '3': new Set(),
  }

  const builtInAdapter = numbers[numbers.length - 1] + 3
  differences['3'].add(builtInAdapter)

  let jolts = 0
  const usedJolts = new Set()

  for (let i = 0; i < numbers.length; ++i) {
    const number = numbers[i]

    const diff = Math.abs(jolts - number)
    if (differences[diff] !== undefined) {
      differences[diff].add(number)
      jolts = number
      usedJolts.add(jolts)
    }
  }

  console.log(usedJolts)

  console.log(differences)

  return differences['1'].size * differences['3'].size
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