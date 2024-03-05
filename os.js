// Thing about your computer module 
const os = require('os');

const user = os.userInfo();
console.log(user);

// Method return the system uptime in seconds

console.log(os.uptime());
console.log(os.homedir());
console.log(os.machine());
// console.log(os.networkInterfaces());
console.log(os.version());
console.log(os.platform());
console.log(os.release());
console.log(os.type());

// CPU infos
console.log(os.cpus());

// Memory space 
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.endianness());
