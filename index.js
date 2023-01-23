const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('<h1>hello, this about page</h1>')
})
app.get('/help', (req, res) => {
  res.send('<h1>hello, this help page</h1>')
})
app.get('/about', (req, res) => {
  res.send('<h1>hello, this about page</h1>')
})
app.listen(9000)
