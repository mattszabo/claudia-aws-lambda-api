// example node API that does the same thing as the claudia serverless API
var app = require('express')()
var superb = require('superb')

app.get('/', function(req, res) {
	res.send('root')
})

app.get('/hello', function(req, res) {
	var name = req.query.name || 'unknown user'
	res.send(name + ' is ' + superb())
})

app.listen(3903, function() {
	console.log('spying on 3903')
})

