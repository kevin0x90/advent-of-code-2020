const readInput = require('../util/inputReader')

function solve1(lines, right = 3, down = 1) {
  let x = 0
  let treeCount = 0

  for (let i = down; i < lines.length; i += down) {
    const line = lines[i].trim()

    x = (x + right) % (line.length)

    if (line[x] === '#') {
      ++treeCount
    }
  }

  return treeCount
}

function solve2(lines) {
  return solve1(lines, 1, 1) * solve1(lines, 3, 1) * solve1(lines, 5, 1) * solve1(lines, 7, 1) * solve1(lines, 1, 2)
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