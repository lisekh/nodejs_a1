var express = require('express');
var app = express();

app.get('/', function(request, response) {
    res.sendFile(__dirname + 'index.html');
});

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));