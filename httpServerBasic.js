var http = require('http');

http.createServer(
    
    function(req, res){
    res.end("Welcome!");

}).listen(8081)