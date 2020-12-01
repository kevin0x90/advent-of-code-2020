const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 1', () => {
  xit('part 1 - find product of 2 numbers sum up to 2020', () => {
    inputReader.mockResolvedValue(`1721
      979
      366
      299
      675
      1456`)

    const result = solve(1)

    return expect(result).resolves.toEqual(514579)
  })

  xit('part 2 - find product of 3 numbers sum up to 2020', () => {
    inputReader.mockResolvedValue(`1721
      979
      366
      299
      675
      1456`)

    const result = solve(2)

    return expect(result).resolves.toEqual(241861950)
  })
})