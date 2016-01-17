/**
 * Created by JFCS on 1/15/16.
 */
var express = require('express');
var path= require('path');
var app = express();

app.use(express.static('server/public'));

app.get('/',function(request,response){
    response.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.get('/getmyThing',function(request,response){
    var myThing =[{thing1:'thing1'},{thing2:"thing2"}];
    response.send(myThing);
});


var server = app.listen(3000,function(){
   var port = server.address().port;
    console.log('now listening on port :',port);
});