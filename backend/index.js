/* eslint-disable no-restricted-syntax */
require("dotenv").config();
const http = require("http");
const socketIO = require("socket.io");

const app = require("./src/app");

const server = http.createServer(app);

const port = parseInt(process.env.APP_PORT ?? "8000", 10);

const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

const users = [];
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room ${data}`);
  });

  socket.on("sendMessage", (payload) => {
    io.to(payload.chat_id).emit("newMessage", payload);
  });
  socket.on("typing", (data) => {
    if (data.typing) {
      socket.broadcast.emit("isTyping", "est en train d'écrire...");
    } else {
      socket.broadcast.emit("isTyping", "");
    }
  });
  socket.on("newUser", (data) => {
    users.push(data);
    io.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected.", socket.id);
  });
});

server.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
