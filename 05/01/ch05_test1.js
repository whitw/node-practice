var http = require('http')
var server = http.createServer();
var port = 3000;
server.listen(port, function(){
	console.log("웹 서버가 시작되었습니다:%s", port);
});

server.on("connection", function(socket){
	var client = socket.address();
	console.log("클라이언트가 접속했습니다. %s:%d", client.address, client.port);
});

server.on("request", function(req, res){
	console.log('클라이언트 요청이 들어왔습니다.');
	//console.dir(req);
	res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<body><h1>Hello World!</h1></body>");
	res.write("</html>");
	res.end();
});

server.on('close', function(){
	console.log("서버가 종료됩니다.");
});
