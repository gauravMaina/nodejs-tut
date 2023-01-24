const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send(`<h1> Welcome ,${req.query.name} ${req.query.lastname}</h1>`)
})
app.get('/help', (req, res) => {
  res.send({
    name: 'Gaurav',
    age: 23,
    gender: 'Male'
  })
})
app.get('/about', (req, res) => {
  res.send('<h1>hello, this about page</h1>')
})
app.listen(9000)
