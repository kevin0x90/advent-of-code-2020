const readInput = require('../util/inputReader')

function solve1(lines) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'ecl', 'hgt', 'hcl', 'pid']

  let numberOfValidPassports = 0
  const passportFields = new Set()

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i].trim()

    if (line === '') {
      let numberOfFields = 0
      for (let j = 0; j < requiredFields.length; ++j) {
        const field = requiredFields[j]
        if (passportFields.has(field)) {
          ++numberOfFields
        }
      }

      if (numberOfFields >= requiredFields.length) {
        ++numberOfValidPassports
      }

      passportFields.clear()

      continue
      // end of passport
    }

    const pairs = line.split(' ')
    for (let k = 0; k < pairs.length; ++k) {
      const pair = pairs[k]
      const key = pair.split(':')[0].trim()
      passportFields.add(key)
    }
  }

  let numberOfFields = 0
  for (let j = 0; j < requiredFields.length; ++j) {
    const field = requiredFields[j]
    if (passportFields.has(field)) {
      ++numberOfFields
    }
  }

  if (numberOfFields >= requiredFields.length) {
    ++numberOfValidPassports
  }

  passportFields.clear()

  return numberOfValidPassports
}

function solve2(lines) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'ecl', 'hgt', 'hcl', 'pid']

  const validator = {
    byr: (value) => {
      const number = parseInt(value, 10)

      return number >= 1920 && number <= 2002
    },
    iyr: (value) => {
      const number = parseInt(value, 10)

      return number >= 2010 && number <= 2020
    },
    eyr: (value) => {
      const number = parseInt(value, 10)

      return number >= 2020 && number <= 2030
    },
    ecl: (value) => {
      const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

      return validColors.includes(value)
    },
    hgt: (value) => {
      const number = parseInt(value.substring(0, value.length - 2), 10)
      const unit = value.substring(value.length - 2)

      if (unit === 'cm') {
        return number >= 150 && number <= 193
      } else if (unit === 'in') {
        return number >= 59 && number <= 76
      }

      return false
    },
    hcl: (value) => {
      if (!value[0] === '#' || value.length !== 7) {
        return false
      }

      return Number.isInteger((parseInt(value.substring(1), 16)))
    },
    pid: (value) => {
      return /^\d{9}$/g.test(value)
    },
    cid: () => true
  }

  const countNumberOfValidFields = (passportFields) => {
    let numberOfFields = 0
      for (let j = 0; j < requiredFields.length; ++j) {
        const field = requiredFields[j]
        if (passportFields[field]) {
          ++numberOfFields
        }
      }

    return numberOfFields
  }


  let numberOfValidPassports = 0
  let passportFields = {}

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i].trim()

    if (line === '') {
      const numberOfFields = countNumberOfValidFields(passportFields)

      if (numberOfFields >= requiredFields.length) {
        ++numberOfValidPassports
      }

      passportFields = {}

      continue
    }

    const pairs = line.split(' ')
    for (let k = 0; k < pairs.length; ++k) {
      const pair = pairs[k]
      const keyValue = pair.split(':')
      const key = keyValue[0].trim()
      const value = keyValue[1].trim()
      passportFields[key] = validator[key](value)
    }
  }

  if (countNumberOfValidFields(passportFields) >= requiredFields.length) {
    ++numberOfValidPassports
  }

  passportFields = {}

  return numberOfValidPassports
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