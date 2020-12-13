const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 13', () => {
  it('part 1 - earliest bus', () => {
    inputReader.mockResolvedValue(`939
7,13,x,x,59,x,31,19`)

    const result = solve(1)

    return expect(result).resolves.toEqual(295)
  })

  it('part 2 - earliest timestamp', () => {
    inputReader.mockResolvedValue(`939
7,13,x,x,59,x,31,19`)

    const result = solve(2)

    return expect(result).resolves.toEqual(1068781)
  })
})