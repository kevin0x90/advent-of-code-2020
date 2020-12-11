const readInput = require('../util/inputReader')

const EMPTY = 'L'
const OCCUPIED = '#'

const positions = [
    [0, -1], // left
    [0, 1], // right
    [-1, 0], // up
    [1, 0], // down
    [-1, -1], // top left corner
    [-1, 1], // top right corner
    [1, -1], // bottom left corner
    [1, 1] // bottom right corner
]

function countOccupiedAdjacentSeats(seats, currentSeat) {
  let result = 0

  for (let i = 0; i < positions.length; ++i) {
    const [currentRow, currentColumn] = currentSeat
    const [row, column] = positions[i]

    if (seats[currentRow + row] !== undefined && seats[currentRow + row][currentColumn + column] === OCCUPIED) {
      ++result
    }
  }

  return result
}

function countVisibleSeatsInAnyDirection(seats, currentSeat) {
 let result = 0

  for (let i = 0; i < positions.length; ++i) {
    const [currentRow, currentColumn] = currentSeat
    let [row, column] = positions[i]

    let k = 1
    const oldRow = row
    const oldColumn = column
    let rowToCheck = oldRow * k
    let columnToCheck = oldColumn * k

    while (seats[currentRow + rowToCheck] !== undefined && seats[currentRow + rowToCheck][currentColumn + columnToCheck]) {
      const otherValue = seats[currentRow + rowToCheck][currentColumn + columnToCheck]

      if (otherValue === OCCUPIED) {
        ++result
        break
      }

      if (otherValue === EMPTY) {
        break
      }
      ++k
      rowToCheck = oldRow * k
      columnToCheck = oldColumn * k
    }
  }

  return result
}

function solve1(lines) {
  const seats = []

  lines.forEach(line => {
    seats.push(line.split(''))
  })

  let previous = seats
  let next = []
  while (true) {
    for (let rowIndex = 0; rowIndex < previous.length; ++rowIndex) {
      next.push(previous[rowIndex].slice())

      for (let columnIndex = 0; columnIndex < previous[rowIndex].length; ++columnIndex) {
        const seatValue = previous[rowIndex][columnIndex]
        const occupiedSeats = countOccupiedAdjacentSeats(previous, [rowIndex, columnIndex])


        if (seatValue === EMPTY && occupiedSeats === 0) {
          next[rowIndex][columnIndex] = OCCUPIED
        } else if (seatValue === OCCUPIED && occupiedSeats >= 4) {
          next[rowIndex][columnIndex] = EMPTY
        }
      }
    }

    if (JSON.stringify(previous) === JSON.stringify(next)) {
      break
    }

    previous = next
    next = []
  }

  let result = 0
  for (let row = 0; row < next.length; ++row) {
    for (let column = 0; column < next[row].length; ++column) {
      if (next[row][column] === OCCUPIED) {
        ++result
      }
    }
  }

  return result
}

function solve2(lines) {
  const seats = []

  lines.forEach(line => {
    seats.push(line.split(''))
  })

  let previous = seats
  let next = []
  while (true) {
    for (let rowIndex = 0; rowIndex < previous.length; ++rowIndex) {
      next.push(previous[rowIndex].slice())

      for (let columnIndex = 0; columnIndex < previous[rowIndex].length; ++columnIndex) {
        const seatValue = previous[rowIndex][columnIndex]
        const occupiedSeats = countVisibleSeatsInAnyDirection(previous, [rowIndex, columnIndex])


        if (seatValue === EMPTY && occupiedSeats === 0) {
          next[rowIndex][columnIndex] = OCCUPIED
        } else if (seatValue === OCCUPIED && occupiedSeats >= 5) {
          next[rowIndex][columnIndex] = EMPTY
        }
      }
    }

    if (JSON.stringify(previous) === JSON.stringify(next)) {
      break
    }

    previous = next
    next = []
  }

  let result = 0
  for (let row = 0; row < next.length; ++row) {
    for (let column = 0; column < next[row].length; ++column) {
      if (next[row][column] === OCCUPIED) {
        ++result
      }
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