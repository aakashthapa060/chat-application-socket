const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("chat message", msg => {
      socket.broadcast.emit("chat message", msg)
  })


});

const PORT = 8080;
server.listen(PORT, () => {
  console.log('listening on *:8080');
});