const http = require('http');
http.createServer((req, res) => {
   if (req.url == "/") {
      res.end("Home");

   } else if (req.url == "/book") {
      res.end("books");
   }

}).listen(8000);