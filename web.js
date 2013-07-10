var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile('index.html', function(error, content){
		if (error) {
			console.log(error);
		}
		else {
			response.write(content);
		}
		response.end();
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
