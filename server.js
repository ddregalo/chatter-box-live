var express = require('express')
var app = express()

app.use(express.static(__dirname + "/lib/views/"))
app.listen(3000)
