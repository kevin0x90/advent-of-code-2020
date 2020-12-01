const fsPromises = require('fs/promises')
const path = require('path')

module.exports = function (directory, part) {
  const inputPath = path.join(directory, `input${part}.txt`)

  return fsPromises.readFile(inputPath, 'utf-8')
}