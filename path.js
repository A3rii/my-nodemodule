const path = require('path');
const dir = path.join(__dirname, "/MyPath/", "SubPath", "gaming.txt")
const dir_resolve = path.resolve(__dirname, "MyPath", "SubPath", "gaming.txt")

console.log(path.basename(dir));
console.log(dir_resolve);