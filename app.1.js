var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('This is the homepage!');
});

app.get('/contact', function(request, response){
    response.send('This is the contact page!');
});

app.listen(3000);
var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed.");
},2000);
