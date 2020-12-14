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

  xit('part 2 - ', () => {
    inputReader.mockResolvedValue(`939
7,13,x,x,59,x,31,19`)

    const result = solve(2)

    return expect(result).resolves.toEqual(1068781)
  })
})