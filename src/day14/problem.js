const readInput = require('../util/inputReader')

function getMaskBitPositions(mask) {
  const result = {}

  for (let i = mask.length - 1; i >= 0; --i) {
    const bit = mask[i]
    if (bit === 'X') {
      continue
    }

    result[mask.length - i] = parseInt(bit, 2)
  }

  return result
}

function setBitPositions(value, bitPositions) {
  Object.entries(bitPositions).forEach(([position, bitValue]) => {
    const n = BigInt.asUintN(36, BigInt(parseInt(position, 10) - 1))
    if (bitValue === 0) {
      value &= ~(BigInt.asUintN(36, 1n) << n)
    } else if (bitValue === 1) {
      value |= BigInt.asUintN(36, 1n) << n
    }
  })

  return value
}

function solve1(lines) {
  let memory = {}

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const mask = line.split('=')[1].trim()
    const bitPositions = getMaskBitPositions(mask)

    while (i + 1 < lines.length && lines[i + 1].startsWith('mem')) {
      const memEntry = lines[i + 1].split('=')
      const memLocation = /mem\[(\d+)\]/g.exec(memEntry[0].trim())[1]
      const value = BigInt.asUintN(36, BigInt(parseInt(memEntry[1].trim(), 10)))

      memory[memLocation] = setBitPositions(value, bitPositions)
      ++i
    }
  }

  return Object.values(memory).reduce((result, value) => result + BigInt.asUintN(36, BigInt(parseInt(value, 10))), BigInt.asUintN(36, 0n))
}

function solve2(lines) {
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