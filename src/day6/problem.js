const readInput = require('../util/inputReader')

function solve1(lines) {
  let count = 0

  for (let i = 0; i < lines.length; ++i) {
    const group = lines[i]
    const entries = group.split('\n')
    const questions = new Set()

    for (let k = 0; k < entries.length; ++k) {
      for (let j = 0; j < entries[k].length; ++j) {
        questions.add(entries[k][j])
      }
    }

    count += questions.size
  }

  return count
}

function solve2(lines) {
  let count = 0

  for (let i = 0; i < lines.length; ++i) {
    const group = lines[i]
    const entries = group.split('\n')
    const questions = {}

    for (let k = 0; k < entries.length; ++k) {
      for (let j = 0; j < entries[k].length; ++j) {
        if (!questions[entries[k][j]]) questions[entries[k][j]] = 1
        else questions[entries[k][j]] += 1
      }
    }

    Object.keys(questions).forEach(key => {
      if (questions[key] === entries.length) {
        count += 1
      }
    })
  }

  return count
}

function solve(part, input) {
  const lines = input.split('\n\n')

  if (part === 1) {
    return solve1(lines)
  }

  return solve2(lines)
}

module.exports = function (part) {
  return readInput(__dirname, part)
    .then(solve.bind(this, part))
}