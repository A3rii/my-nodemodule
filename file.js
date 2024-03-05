
/** Synchronous file  */
const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// Read what is in the file // 
// const text = readFileSync("./story.txt", "utf8");
// console.log(text);


// Creating file //
// writeFileSync("./MyPath/SubPath/text.txt",
//    `Hello My friend : ${text}`
// )


/* Asynchronous File */

readFile("MyPath/SubPath/text.txt", "utf-8", (err, data) => {
   if (err) console.log(err.message);;
   console.log(data);
})

