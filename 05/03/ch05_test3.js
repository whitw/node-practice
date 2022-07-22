var http = request('http');
var fs = request('fs');

var server = createServer(function(){});
var port = 3000;

server.on("request", function(req, res){
	var filename = 'house.png';
	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {"Content-Type":"image/png"});
		res.write(data);
		res.end();
	});

});

server.listen(port, function(){});
