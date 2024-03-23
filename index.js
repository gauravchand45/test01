require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('Hasdfsgkhasjdjh!')
})
app.get('/kuch', (req, res) => {
  res.send('luch!')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})