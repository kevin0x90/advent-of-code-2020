const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 15', () => {
  it.each([
    ['0,3,6', 436],
    ['1,3,2', 1],
    ['2,1,3', 10],
    ['1,2,3', 27],
    ['2,3,1', 78],
    ['3,2,1', 438],
    ['3,1,2', 1836]
  ])('part 1 - 2020th number', (input, expectedResult) => {
    inputReader.mockResolvedValue(input)

    const result = solve(1)

    return expect(result).resolves.toEqual(expectedResult)
  })

  xit.each([
    ['0,3,6', 175594],
    ['1,3,2', 2578],
    ['2,1,3', 3544142],
    ['1,2,3', 261214],
    ['2,3,1', 6895259],
    ['3,2,1', 18],
    ['3,1,2', 362]
  ])('part 2 - 30000000th number', (input, expectedResult) => {
    inputReader.mockResolvedValue(input)

    const result = solve(2)

    return expect(result).resolves.toEqual(expectedResult)
  })
})