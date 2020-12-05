const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 5', () => {
  it.each`
      pass            | expectedId
      ${'BFFFBBFRRR'} | ${567}
      ${'FFFBBBFRRR'} | ${119}
      ${'BBFFBBFRLL'} | ${820}
    `('part 1 - find seat id', ({pass, expectedId}) => {
    inputReader.mockResolvedValue(pass)

    const result = solve(1)

    return expect(result).resolves.toEqual(expectedId)
  })
})