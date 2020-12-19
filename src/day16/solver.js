const solve = require('./problem')

solve(1)
  .then(console.log.bind(this, 1))

 solve(2)
   .then(console.log.bind(this, 2))