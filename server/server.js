const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    From: 'Jake',
    text: 'Hey, this is a message from the server',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('Created message from client:', JSON.stringify(message, undefined, 2));
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
