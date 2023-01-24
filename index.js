const express = require('express')
const path = require('path')
const app = express()

app.set('view engine','ejs')
app.get('', (req, res) => {
  const user ={
    name:'gaurav',
    email:'gaurav@gmail.com'
  }
  res.render('profile',{user})
})

app.listen(9000)
