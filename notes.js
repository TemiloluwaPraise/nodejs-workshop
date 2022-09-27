console.log("starting notes.js....");

var add = (x, y) => x + y;
var sub = (x, y) => x - y;
module.exports = {
  add,
  sub,
};

//without exporting the function
//it wont work

// module.exports.add = function add(x, y) {
//     return x + y;
//   }

//OR
// function add(x, y) {
//     return x + y;
//   }

//   module.exports=[
//     add
//   ]
