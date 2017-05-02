var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
}).listen(3310);

console.log('press Ctrl-C to terminate...');



var http = require('http'),
    fs   = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode,{'Content-Type': ContentType});
            res.end(data);
        }
    });
}


http.createServer(function(req, res){
    var path = req.url.replace(/\/?:\?.*)?$/, '').toLowerCase();
    
})