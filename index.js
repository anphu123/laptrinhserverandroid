const express = require('express')
const app = express()
const port = 12345

app.get('/', (req, res) => {
  res.send('Hello World huỳnh mai an phú 1234_ps19353')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})