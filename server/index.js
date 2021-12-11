const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('llo World')
})
 
app.listen(3000)
