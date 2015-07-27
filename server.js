var express = require('express');
    app     = express(),
    env     = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config  = require('./server/config')[env];

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.render('home');
});



app.listen(config.port);
console.log('listening on port' + config.port);