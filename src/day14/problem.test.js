const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 14', () => {
  it('part 1 - sum of memory values', () => {
    inputReader.mockResolvedValue(`mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`)

    const result = solve(1)

    return expect(result).resolves.toEqual(165n)
  })

  it('part 2 - decoder chip', () => {
    inputReader.mockResolvedValue(`mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`)

    const result = solve(2)

    return expect(result).resolves.toEqual(208n)
  })
})