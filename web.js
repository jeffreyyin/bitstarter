var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World updated!');
	fs.readFile('index.html', function(error, content){
		if (error) {
			console.log(error);
		}
		else {
			response.write(content);
		}
	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
