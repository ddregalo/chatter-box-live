var express = require('express')
var app = express()
var path = require('path');
const PORT = 3000;

app.use(express.static(__dirname + "/src/views/"))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
