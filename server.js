var ApiBuilder = require('claudia-api-builder'),
    superb = require('superb'),
    api = new ApiBuilder();

module.exports = api;

api.get('/hello', function(req) {
  return req.queryString.name + ' is ' + superb()
});

