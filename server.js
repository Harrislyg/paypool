var http = require('http');

var jsonReturn = [
    {
     "productName" : "Amazon Echo",
     "price" : "$12",
     "buyer" : "John",
    },
    {
     "productName" : "Amazon FitBit",
     "price" : "$153",
     "buyer" : "Mark",
    },
];

http.createServer(function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(jsonReturn));
  }, 2000);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
