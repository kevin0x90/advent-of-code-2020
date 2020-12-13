const readInput = require('../util/inputReader')

function solve1(lines) {
  const start = [0, 0]
  let direction = 'E'
  const directions = ['E', 'S', 'W', 'N']
  const directionVectors = [[1, 0], [0, -1], [-1, 0], [0, 1]]

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const command = line[0]
    const value = parseInt(line.substring(1), 10)

    if (command === 'N') {
      start[1] += value
    } else if (command === 'S') {
      start[1] -= value
    } else if (command === 'E') {
      start[0] += value
    } else if (command === 'W') {
      start[0] -= value
    } else if (command === 'L') {
      direction = directions[(directions.indexOf(direction) - (value / 90) + directions.length) % directions.length]
    } else if (command === 'R') {
      direction = directions[(directions.indexOf(direction) + (value / 90) + directions.length) % directions.length]
    } else if (command === 'F') {
      const dirVector = directionVectors[directions.indexOf(direction)]
      start[0] += dirVector[0] * value
      start[1] += dirVector[1] * value
    }
  }

  return Math.abs(0 - start[0]) + Math.abs(0 - start[1])
}

function solve2(lines) {
  const rotate = (degree, point) => {
    for (let i = 0; i < Math.floor(degree / 90); ++i) {
      point = [-point[1], point[0]]
    }

    return point
  }

  let wayPoint = [10, -1]
  const start = [0, 0]

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const command = line[0]
    const value = parseInt(line.substring(1), 10)

    if (command === 'N') {
      wayPoint[1] -= value
    } else if (command === 'S') {
      wayPoint[1] += value
    } else if (command === 'E') {
      wayPoint[0] += value
    } else if (command === 'W') {
      wayPoint[0] -= value
    } else if (command === 'L') {
      wayPoint = rotate(360 - value, wayPoint)
    } else if (command === 'R') {
      wayPoint = rotate(value, wayPoint)
    } else if (command === 'F') {
      start[0] += wayPoint[0] * value
      start[1] += wayPoint[1] * value
    }
  }

  return Math.abs(start[0]) + Math.abs(start[1])
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