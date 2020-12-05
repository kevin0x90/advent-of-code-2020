const readInput = require('../util/inputReader')

function binarySearch(start, end, specification) {
  let middle = -1

  for (let i = 0, left = start, right = end; i < specification.length; ++i) {
    middle = Math.floor((left + right) / 2)
    const char = specification[i]

    if (char === 'F' || char === 'L') {
      right = middle
    } else if (char === 'B' || char === 'R') {
      middle += 1
      left = middle
    }
  }

  return middle
}

function solve1(lines) {
  let highestId = 0
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const row = binarySearch(0, 127, line.substring(0, 7))
    const column = binarySearch(0, 7, line.substring(7))

    const id = (row * 8) + column
    highestId = Math.max(id, highestId)
  }

  return highestId
}

function solve2(lines) {
  const ids = []
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const row = binarySearch(1, 126, line.substring(0, 7))
    const column = binarySearch(0, 7, line.substring(7))

    const id = (row * 8) + column
    ids.push(id)
  }

  ids.sort()

  for (let i = ids[0]; i < ids[ids.length - 1]; ++i) {
    if (!ids.includes(i)) {
      return i
    }
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