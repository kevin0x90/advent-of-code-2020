const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 2', () => {
  it('part 1 - number of valid passwords with min, max occurence of a character', () => {
    inputReader.mockResolvedValue(`1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`)

    const result = solve(1)

    return expect(result).resolves.toEqual(2)
  })

  it('part 2 - number of valid passwords with exclusive or occurence', () => {
    inputReader.mockResolvedValue(`1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`)

    const result = solve(2)

    return expect(result).resolves.toEqual(1)
  })
})