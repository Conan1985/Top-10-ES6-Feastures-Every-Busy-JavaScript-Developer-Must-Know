// In ES5:
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}

var service = require('module.js')
console.log(service.port) // 3000

// In ES6:
export var port = 3000
export function getAccounts(url) {
  ...
}
