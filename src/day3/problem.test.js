const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 3', () => {
  it('part 1 - count # with rule 3 to the right and 1 down', () => {
    inputReader.mockResolvedValue(`..##.......
                                   #...#...#..
                                   .#....#..#.
                                   ..#.#...#.#
                                   .#...##..#.
                                   ..#.##.....
                                   .#.#.#....#
                                   .#........#
                                   #.##...#...
                                   #...##....#
                                   .#..#...#.#`)

                                    const result = solve(1)

    return expect(result).resolves.toEqual(7)
  })

  it('part 2 - count and multiply results with rules: [(r1,d1),(r3,d1),(r5,d1),(r7,d1),(r1,d2)]', () => {
    inputReader.mockResolvedValue(`..##.......
                                   #...#...#..
                                   .#....#..#.
                                   ..#.#...#.#
                                   .#...##..#.
                                   ..#.##.....
                                   .#.#.#....#
                                   .#........#
                                   #.##...#...
                                   #...##....#
                                   .#..#...#.#`)

    const result = solve(2)

    return expect(result).resolves.toEqual(336)
  })
})