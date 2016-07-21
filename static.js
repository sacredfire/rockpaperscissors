var express = require('express')
var path = require('path')
var app = express()

//app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 5000)
