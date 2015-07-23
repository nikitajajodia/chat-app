var mongoose = require('mongoose');
var express  = require('express');
var app      = express();

//Default Route
app.get('/', function (req, res) {
  res.send('<h1>Hello World!<h1>');
});

//Create the server on port 3000
var server = app.listen(3000, function () {   
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

//Routing - To let use other files within the public directory
app.use(express.static(__dirname + '/public'));

//Initialize a new instance of socket.io by passing the server object and identified as namespace
var io = require('socket.io')(server);

//Listen on the connection event for incoming sockets.Each namespace emits a connection event that receives each Socket instance as a parameter.
io.on('connection', function(socket){
  console.log('a user connected');
  //Each socket also fires a special disconnect event.Then if you refresh a tab several times you can see it in action.
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  //Receive the chat message event created in index.html when the user types in the input field.
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    //n order to send an event to everyone, Socket.IO gives us the io.emit:
    io.emit('chat message', msg);
  });
});