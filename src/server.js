var express = require('express')
var app = express()
const PORT = 3000;

app.use(express.static(__dirname + "/views/"))

var messages = [
  {name: 'Bhav', message: 'Message 1'},
  {name: 'Katie', message: 'Message 2'}
]

app.get("/allMessages", (req, res, err) => {
  res.send(messages)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
