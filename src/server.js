var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const PORT = 3000;

app.use(express.static(__dirname + "/views/"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var messages = [
  {name: 'Bhav', message: 'Message 1'},
  {name: 'Katie', message: 'Message 2'}
]

app.get("/allMessages", (req, res) => {
  res.send(messages)
})

app.post("/allMessages", (req, res) => {
  messages.push(req.body)
  io.emit('message', req.body)
  res.sendStatus(200)
})

io.on('connection', (socket) => {
  console.log('a user has connected...')
})

http.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
