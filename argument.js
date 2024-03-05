const minimist = require('minimist');
console.log(process.argv.slice(2)[0]);
const value = minimist(process.argv.slice(2)).name;
console.log(value);

// module.exports.item = ["item1", "item2"];
// const name = "Kimly"
// const age = 20;

const num1 = 2, num2 = 4;

const addValue = () => {
   console.log(`${num1 + num2}	`);
}
addValue();