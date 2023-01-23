const fs = require('fs')
const { join } = require('path')

const dirPath = join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(`${dirPath}/apple.txt`, 'this is file name is apple.txt')
// fs.appendFile(filePath, ' new data updated', err => {
//   if (!err) console.log(' data updated succefully')
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`, err => {
//   if (!err) {
//     console.log('filname is Changed')
//   }
// })
fs.unlink(`${dirPath}/fruit.txt`, err => {
  if (err) throw err
  console.log('fruit.txt was deleted')
})
