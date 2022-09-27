console.log("starting app.js .......");

const fs = require("fs");
const notes = require("./notes");
const yargs = require('yargs');
const { argv } = require("process");

// fs.appendFileSync("greetings.txt", "hello world");

// console.log(notes.add(2, 5));
// console.log(notes.sub(2, 5));

// console.log(process.argv);

console.log('Process', process.argv);
console.log('Yargs', yargs.argv);

var title = yargs.argv.title;
console.log(title)