var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    From: 'Jen',
    text: 'Hey this is Jen\'s message from the client'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New Message: ', JSON.stringify(message, undefined, 2));
});
