var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/imamess',
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGO_LAB,
    port: process.env.PORT || 80
  }
};