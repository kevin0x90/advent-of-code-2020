const readInput = require('../util/inputReader')

function solve1(lines) {
  const alreadySeenLine = new Set()

  let result = 0

  for (let i = 0; i < lines.length;) {
    const [instruction, value] = lines[i].split(' ')

    if (alreadySeenLine.has(i)) {
      break
    } else {
      alreadySeenLine.add(i)
    }

    if (instruction === 'nop') {
      ++i
    } else if (instruction === 'acc') {
      result += parseInt(value, 10)
      previousAccInstruction = parseInt(value, 10)
      ++i
    } else if (instruction === 'jmp') {
      const line = parseInt(value, 10)
      i += line
    }
  }

  return result
}

function solve2(lines) {
  const findLoop = (program) => {
    const alreadySeenLine = new Set()

    let result = 0
    let i

    for (i = 0; i < program.length;) {
      const [instruction, value] = program[i].split(' ')

      if (alreadySeenLine.has(i)) {
        break
      } else {
        alreadySeenLine.add(i)
      }

      if (instruction === 'nop') {
        ++i
      } else if (instruction === 'acc') {
        result += parseInt(value, 10)
        previousAccInstruction = parseInt(value, 10)
        ++i
      } else if (instruction === 'jmp') {
        const line = parseInt(value, 10)
        i += line
      }
    }

    return [result, i !== program.length]
  }

  const modifiedLines = new Set()
  let result = -1
  let hasLoop = false
  let program = [...lines]
    for (let i = 0; i < program.length; ++i) {
      if (!modifiedLines.has(i)) {
        const [operation, value] = program[i].split(' ')
        const parsedValue = parseInt(value, 10)
        if (operation === 'jmp') {
          program[i] = `nop ${value}`
          modifiedLines.add(i)
        } else if (operation === 'nop' && parsedValue !== 0) {
          program[i] = `jmp ${value}`
          modifiedLines.add(i)
        }
      }

      [result, hasLoop] = findLoop(program)
      program = [...lines]

      if (!hasLoop) {
        break
      }
    }

  return result
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