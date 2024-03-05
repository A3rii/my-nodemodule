let http = require('http');
let fs = require('fs');
let url = require('url');
let prompt = require('prompt-sync')();

let file_name = prompt("Enter File Name: ");
console.log(file_name);


http.createServer(function (req, res) {
   fs.readFile(`${file_name}.txt`, 'utf8', function (err, data) {
      if (err) {
         res.writeHead(404, { 'Content-Type': 'text/html' });
         return res.end("404 Not Found");
      };


      let arr = [];
      let story = data.split(" ");
      for (let i = 0; i < story.length; i++) {
         story[i] = story[i].charAt(0).toUpperCase() + story[i].slice(1);
         arr.push(story[i]);
      }
      let text = arr.join(" ");
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(text);

      res.end();
      setInterval(() => {
         console.log("server terminated");
         process.exit();
      }, 2000)

   })

}).listen(3003);

