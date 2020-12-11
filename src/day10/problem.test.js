const solve = require('./problem')
const inputReader = require('../util/inputReader')

jest.mock('../util/inputReader')

describe('day 10', () => {
  it('part 1 - ', () => {
    inputReader.mockResolvedValue(`16
10
15
5
1
11
7
19
6
12
4`)

    const result = solve(1)

    return expect(result).resolves.toEqual(35)
  })

  it('part 1 - second example', () => {
    inputReader.mockResolvedValue(`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`)

    const result = solve(1)

    return expect(result).resolves.toEqual(220)
  })

  it('part 2 - arrangements', () => {
    inputReader.mockResolvedValue(`16
10
15
5
1
11
7
19
6
12
4`)

    const result = solve(8)

    return expect(result).resolves.toEqual(8)
  })

  it('part 2 - bigger arrangements', () => {
    inputReader.mockResolvedValue(`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`)

    const result = solve(8)

    return expect(result).resolves.toEqual(19208)
  })
})