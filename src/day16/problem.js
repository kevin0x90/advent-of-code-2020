const readInput = require('../util/inputReader')

function parseRules(rulesInput) {
  const result = new Map()

  const ruleLines = rulesInput.split('\n')
  ruleLines.forEach(ruleLine => {
    const matches = /([\w\s]+):\s(\d+)-(\d+)\sor\s(\d+)-(\d+)/g.exec(ruleLine)
    const name = matches[1]
    const range1 = {
      from: parseInt(matches[2], 10),
      to: parseInt(matches[3], 10),
    }

    const range2 = {
      from: parseInt(matches[4], 10),
      to: parseInt(matches[5], 10),
    }

    result.set(name, [range1, range2])
  })

  return result
}

function parseYourTicket(yourTicketInput) {
  return yourTicketInput
    .split('\n')[1]
    .trim()
    .split(',')
    .map(number => parseInt(number, 10))
}

function parseNearbyTickets(nearbyTicketsInput) {
  const result = []
  const parts = nearbyTicketsInput.split('\n')
  for (let i = 1; i < parts.length; ++i) {
    const ticket = parts[i].trim().split(',').map(number => parseInt(number, 10))
    result.push(ticket)
  }

  return result
}

function isInRule(rule, value) {
  return value >= rule.from && value <= rule.to
}

function getInvalidFields(rulesInput, ticketValues) {
  const result = new Set()

  const invalidFields = ticketValues.filter(value => {
    let validForAnyRule = false
    for (const ruleValues of rulesInput.values()) {
      const [rule1, rule2] = ruleValues

      if (isInRule(rule1, value) || isInRule(rule2, value)) {
        validForAnyRule = true
        break
      }
    }

     return !validForAnyRule
  })

  invalidFields.forEach(result.add.bind(result))

  return result
}

function solve1(lines) {
  const rulesInput = parseRules(lines[0])
  const nearbyTickets = parseNearbyTickets(lines[2])

  return nearbyTickets.reduce((result, ticketValues) => {
    const invalidFields = getInvalidFields(rulesInput, ticketValues)

    return result + Array.from(invalidFields.values()).reduce((sum, fieldValue) => sum + fieldValue, 0)
  }, 0)
}

function solve2(lines) {
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