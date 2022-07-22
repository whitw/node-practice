var http = require('http');
var fs = require('fs');

var server = http.createServer(function(){});
var port = 3000;

//sending file

server.on("request", function(req, res){
	var filename = 'owo.png';
	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {"Content-Type":"image/png"});
		res.write(data);
		res.end();
	});

});

server.listen(port, function(){});
