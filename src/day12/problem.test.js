const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 12', () => {
  it('part 1 - manhatten distance ship', () => {
    inputReader.mockResolvedValue(`F10
N3
F7
R90
F11`)

    const result = solve(1)

    return expect(result).resolves.toEqual(25)
  })

  it('part 2 - waypoint', () => {
    inputReader.mockResolvedValue(`F10
N3
F7
R90
F11`)

    const result = solve(2)

    return expect(result).resolves.toEqual(286)
  })
})