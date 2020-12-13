const readInput = require('../util/inputReader')

function solve1(lines) {
  const arrivalTime = parseInt(lines[0], 10)
  const busSchedules = lines[1].split(',')

  const min = {
    busId: '',
    waitTime: Infinity,
  }

  for (let i = 0; i < busSchedules.length; ++i) {
    const entry = busSchedules[i]
    if (entry === 'x') {
      continue
    }
    const schedule = parseInt(entry, 10)

    const nextBusArrival = schedule * (Math.floor(arrivalTime / schedule) + (arrivalTime % schedule === 0 ? 0 : 1))
    const diff = Math.abs(arrivalTime - nextBusArrival)

    if (diff < min.waitTime) {
      min.waitTime = diff
      min.busId = schedule
    }
  }

  return min.busId * min.waitTime
}

function busDeparturesMatch(busIdMinutes, t) {
  return Object.entries(busIdMinutes).every(([id, min]) => {
     return (t + min) % parseInt(id, 10) === 0
  })
}

function solve2(lines) {
  const busSchedules = lines[1].split(',')
  const busIdMinutes = {}
  let minBusId = Infinity
  let maxBusId = 0

  for (let minute = 0; minute < busSchedules.length; ++minute) {
    if (busSchedules[minute] === 'x') {
      continue
    }
    const busId = parseInt(busSchedules[minute], 10)
    busIdMinutes[busId] = minute

    minBusId = Math.min(busId, minBusId)
    maxBusId = Math.max(busId, maxBusId)
  }

  let t = maxBusId

  while (!busDeparturesMatch(busIdMinutes, t - busIdMinutes[maxBusId])) {
    t += maxBusId
  }

  return t - busIdMinutes[maxBusId]
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