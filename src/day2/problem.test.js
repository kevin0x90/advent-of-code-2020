const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 1', () => {
  it('part 1 - find product of 2 numbers sum up to 2020', () => {
    inputReader.mockResolvedValue(`1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`)

    const result = solve(1)

    return expect(result).resolves.toEqual(2)
  })

  it('part 2 - find product of 3 numbers sum up to 2020', () => {
    inputReader.mockResolvedValue(`1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`)

    const result = solve(2)

    return expect(result).resolves.toEqual(1)
  })
})