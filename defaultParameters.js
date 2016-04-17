// In ES5, define default parameters:
var link = function (height, color, url) {
  var height = height || 50
  var color = color || 'red'
  var url = url || 'http://azat.co'
  ...
}

// In ES6:
var link = function (height = 50, color = 'red', ulr = 'http://azat.co') {
  ...
}
