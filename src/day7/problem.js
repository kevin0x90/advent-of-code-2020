const readInput = require('../util/inputReader')

function solve1(lines) {
  const bagCollection = {}

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const parts = line.split('contain')
    const bagName = parts[0].trim()
    const matches = [...parts[1].trim().matchAll(/(\d+)\s([a-z\s]+)/g)]

    const singularBagName = bagName.substring(0, bagName.length - 1)

    if (!bagCollection[singularBagName]) {
      bagCollection[singularBagName] = {}
    }

    matches.forEach(match => {
      const quantity = match[1]
      const name = match[2]

      const normalizedName = name.endsWith('s') ? name.substring(0, name.length - 1) : name
      bagCollection[singularBagName][normalizedName] = quantity
    })
  }

  const resultSet = new Set()

  const iterateKeys = (keys) => {
    keys.forEach(key => {
      if (bagCollection[key]['shiny gold bag']) {
        resultSet.add(key)
      } else {
        keys.forEach(subKey => {
          resultSet.forEach(result => {
            if (bagCollection[subKey][result]) {
              resultSet.add(subKey)
            }
          })
        })
      }
    })
  }

  iterateKeys(Object.keys(bagCollection))

  return resultSet.size
}

function solve2(lines) {
  const bagCollection = {}

  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i]
    const parts = line.split('contain')
    const bagName = parts[0].trim()
    const matches = [...parts[1].trim().matchAll(/(\d+)\s([a-z\s]+)/g)]

    const singularBagName = bagName.substring(0, bagName.length - 1)

    if (!bagCollection[singularBagName]) {
      bagCollection[singularBagName] = {}
    }

    matches.forEach(match => {
      const quantity = match[1]
      const name = match[2]

      const normalizedName = name.endsWith('s') ? name.substring(0, name.length - 1) : name
      bagCollection[singularBagName][normalizedName] = quantity
    })
  }

  let result = 1

  const parents = ['shiny gold bag']
  const emptyBags = new Set()
  Object.entries(bagCollection).forEach(([key, value]) => {
    if (Object.keys(value).length === 0) {
      emptyBags.add(key)
    }
  })

  while (parents.length > 0) {
    const parent = parents.shift()

    if (emptyBags.has(parent)) {
      result += 1
    }

    Object.keys(bagCollection[parent]).forEach(subKey => {
      console.log(subKey, bagCollection[subKey])
      const subBagCount = emptyBags.has(subKey) ? 0 : Object.entries(bagCollection[subKey]).reduce((result, entry) => {
        const [key, value] = entry
        return result + parseInt(value, 10)
      }, 0)

      console.log(bagCollection[parent][subKey], subBagCount)

      result += (parseInt(bagCollection[parent][subKey], 10) * subBagCount)

      if (!parents.includes(subKey)) {
        parents.push(subKey)
      }
    })
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