var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('This is the homepage!');
});

app.get('/contact', function(request, response){
    response.send('This is the contact page!');
});

app.listen(3000);
