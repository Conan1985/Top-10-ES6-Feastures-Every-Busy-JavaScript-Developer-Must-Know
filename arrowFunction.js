// In ES5:
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})

var logUpperCase = function() {
  var _this = this
}
this.string = this.string.toUpperCase()
return function(){
  return console.log(_this.string)
}
logUpperCase.call({string: 'est 6 rocks'})()

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
});

var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
var messages = ids.map(function (value, index, list) {
  return 'ID of ' + index + ' element is ' + value + ' ' // explicit return
});

// In ES6:
$('.btn').click((event) =>{
  this.sendData()
})

var logUpperCase = function(){
  this.string - this.string.toUpperCase()
  return () => console.log(this.string)
}

logUpperCase.call({string: 'es6 rocks'})()

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(value => 'ID is ${value}') // implicit return

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map((value, index, list) => `ID of ${index} element is ${value} `) // implicit return
