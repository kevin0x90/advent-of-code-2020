const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 6', () => {
  it('part 1 - count answered questions', () => {
    inputReader.mockResolvedValue(`abc

a
b
c

ab
ac

a
a
a
a

b`)

    const result = solve(1)

    return expect(result).resolves.toEqual(11)
  })

  it('part 2 - count questions answered from all people in a group', () => {
    inputReader.mockResolvedValue(`abc

a
b
c

ab
ac

a
a
a
a

b`)

    const result = solve(2)

    return expect(result).resolves.toEqual(6)
  })
})