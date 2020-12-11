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

  const builtInAdapter = numbers[numbers.length - 1] + 3
  numbers.unshift(0)
  numbers.push(builtInAdapter)

  const paths = {
    '0': 1
  }

  for (let i = 0; i < numbers.length; ++i) {
    const adapter = numbers[i]

    for (let diff = 1; diff <= 3; ++diff) {
      const nextAdapter = adapter + diff
      if (numbers.includes(nextAdapter)) {
        if (paths[nextAdapter] === undefined) {
          paths[nextAdapter] = 0
        }

        if (paths[adapter] === undefined) {
          paths[adapter] = 0
        }

        paths[nextAdapter] += paths[adapter]
      }
    }
  }

  return paths[builtInAdapter]
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