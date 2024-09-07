const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {
    origin: "http://localhost:3000"
  }
 });

io.use((socket, next)=>{
  const username = socket.handshake.auth.username
  if(!username){
    next(new Error("Invalid username"))
  }

  console.log(`${username} has connected`)
  socket.username = username
  next()
})

io.on("connection", (socket) => {
  // console.log("passed middleware")
  socket.on('message', (params)=>{
    socket.emit('message', params)
  })

  socket.on('disconnect', ()=>{
    console.log(`${socket.username} has disconnected`)
  })
});

httpServer.listen(5000);