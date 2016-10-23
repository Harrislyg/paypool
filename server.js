var http = require('http');
var fs=require('fs');

var jsonReturn = [
    {
     "productName" : "Amazon Echo Dot (6-Pack)",
     "price" : "$349.93",
     "imageUrl": " https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjc1pyouPDPAhVKiFQKHQ9EA78QjRwIBw&url=http%3A%2F%2Fmoney.cnn.com%2F2016%2F04%2F04%2Ftechnology%2Famazon-echo-dot-review%2F&psig=AFQjCNHMwhXBOKzcBnl-YbOuv6Pl_Jyo8A&ust=1477295385229194",
     "buyer" : "John",
    },
];

http.createServer(function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(jsonReturn));
  }, 2000);
}).listen(8000);

http.createServer(function (req, res) {
  setTimeout(function () {
    fs.readFile("index.html" ,function(error,data){
       if(error){
           console.log("bo");
           res.writeHead(404,{"Content-type":"text/plain"});
           res.end("Sorry the page was not found");
       }else{
            console.log("bo");
           res.writeHead(200,{"Content-type":"text/html"});
           res.end(data);
       }
   });
  }, 200);
}).listen(3000);

console.log('Server running at http://127.0.0.1:8000/');
