// In ES5:
var data = $('body').data(), // data has properties house and mouse
house = data.house,
mouse = data.mouse

var jsonMiddleware = require('body-parser').json

var boy = req.body, // body has username and password
username = body.username,
password = body.password

// In ES6:
var {house, mouse} = $('body').data() // we'll get house and mouse variables

var {jsonMiddleware} = require('body-parser')

var {usename, password} = req.body

var [col1, col2] = $('.column'),
[line1, lin2, lin3, , lin5] = file.split('\n')
