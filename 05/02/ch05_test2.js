var http = require("http")

//createServer에서 바로 request 요청을 처리할 수도 있다.
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	res.write("Hello World!");
	res.end();
});

server.listen(3000, function(){});
