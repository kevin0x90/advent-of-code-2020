const fs = require('fs')
const path = require('path')

module.exports = function (directory, part) {
  const inputPath = path.join(directory, `input${part}.txt`)

  return new Promise((resolve, reject) => {
    fs.readFile(inputPath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}