const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 16', () => {
  it('part 1 - invalid ticket fields', () => {
    inputReader.mockResolvedValue(`class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`)

    const result = solve(1)

    return expect(result).resolves.toEqual(71)
  })

  xit('part 2 - your ticket field names and values', () => {
    inputReader.mockResolvedValue(`class: 0-1 or 4-19
row: 0-5 or 8-19
seat: 0-13 or 16-19

your ticket:
11,12,13

nearby tickets:
40,4,50
38,6,12
3,9,18
55,2,20
15,1,5
5,14,9`)

    const result = solve(2)

    const expected = new Map()
    expected.set('row', 11)
    expected.set('class', 12)
    expected.set('seat', 13)
    return expect(result).resolves.toEqual(expected)
  })
})