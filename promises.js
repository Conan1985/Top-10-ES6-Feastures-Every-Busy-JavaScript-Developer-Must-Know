// In ES5:
setTimeout(function(){
  consloe.log('Yay!')
}, 1000)

// In ES6:
var wait1000 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000)
}).then(function(){
  console.log('Yay!')
})

var wait1000 = new Promise((resolve, reject) => {setTimeout(resolve,1000)}).then(()=>{
  console.log('Yay!')
})

setTimeout(function(){
  console.log('Yay!')
  setTimeout(function(){
    console.log('Wheeyee!')
  }, 1000)
}, 1000)

var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

wait1000()
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });
