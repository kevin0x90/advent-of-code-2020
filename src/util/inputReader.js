const fs = require('fs')
const path = require('path')

module.exports = function (directory) {
  const inputPath = path.join(directory, 'input.txt')

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