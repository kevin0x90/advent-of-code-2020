const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 11', () => {
  it('part 1 - number of occupied seats', () => {
    inputReader.mockResolvedValue(`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`)

    const result = solve(1)

    return expect(result).resolves.toEqual(37)
  })

  it('part 2 - different rules occupied seats', () => {
    inputReader.mockResolvedValue(`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`)

    const result = solve(2)

    return expect(result).resolves.toEqual(26)
  })
})