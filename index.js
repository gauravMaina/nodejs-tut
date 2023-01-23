const fs = require('fs')
const { join } = require('path')

const dirPath = join(__dirname, 'files')

for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    `${dirPath}/hello${i}.txt`,
    `hello this is file name is hello${i}.txt`
  )
}

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log('error is', err)
    return
  }
  files.forEach(item => {
    console.log(item)
  })
})
