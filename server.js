var express = require('express')
var app = express()
const PORT = 3000;
app.use(express.static(__dirname + "/lib/views/"))
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
