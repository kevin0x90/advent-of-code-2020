const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 9', () => {
  it('part 1 - find invalid number', () => {
    inputReader.mockResolvedValue(`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`)

    const result = solve(1, 5)

    return expect(result).resolves.toEqual(127)
  })

  it('part 2 - find sum of contigious range start and end that sum up to invalid number', () => {
    inputReader.mockResolvedValue(`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`)

    const result = solve(2, 5)

    return expect(result).resolves.toEqual(62)
  })
})