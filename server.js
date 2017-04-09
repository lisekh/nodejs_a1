var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.set('port', process.env.PORT || 8080);
//app.set('port', 3000); //localhost testing
app.listen(app.get('port'));