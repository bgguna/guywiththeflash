var express = require('express')
var logger = require('morgan')
var app = express()
var template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/' || '/home', function (request, response, next) {
  try {
    var html = template({ title: 'Home' })
    response.send(html)
  } catch (exception) {
    next(exception)
  }
})

app.get('/about', function (request, response, next) {
  try {
    var html = template({ title: 'About' })
    response.send(html)
  } catch (exception) {
    next(exception)
  }
})

app.get('/contact', function (request, response, next) {
  try {
    var html = template({ title: 'Contact' })
    response.send(html)
  } catch (exception) {
    next(exception)
  }
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
