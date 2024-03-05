// const a = 1, b = 3;
// const sum = (a, b) => {
//    console.log(` This is sum ${a + b} `);
//    console.log(` This is multiply ${a * b} `);
// }
// sum(a, b);
// const measureTime = () => {
//    console.time("sum()");
//    sum();
//    console.timeEnd("sum()");
// }
// measureTime();
const { log } = require('console');
let ProgressBar = require('progress');

let bar = new ProgressBar('Downloading [:bar] :current :percent', { total: 50 });


let timer = setInterval(function () {
   bar.tick();
   if (bar.complete) {
      console.log('\ncomplete\n');
      clearInterval(timer);
   }
}, 100);

console.log(__dirname);
console.log(__filename);


const readLine = require("readline");
const rl = readLine.createInterface({
   input: process.stdin,
   output: process.stdout,
})

rl.question("whay is your name", (name) => {
   console.log("My name is " + name);
   rl.close()
});