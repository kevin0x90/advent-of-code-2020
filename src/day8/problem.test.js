const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 8', () => {
  it('part 1 - last accumulator value before endless loop', () => {
    inputReader.mockResolvedValue(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)

    const result = solve(1)

    return expect(result).resolves.toEqual(5)
  })

  it('part 2 - terminate program value', () => {
    inputReader.mockResolvedValue(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`)

    const result = solve(2)

    return expect(result).resolves.toEqual(8)
  })
})