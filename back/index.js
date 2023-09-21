const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

let messages = [];

io.on("connection", (socket) => {
  socket.emit("previousMessages", messages);

  socket.on("joinRoom", () => {
    socket.emit("previousMessages", messages);
  })

  socket.on("sendMessage", (payload) => {
    messages = [...messages, payload];
    io.emit("newMessage", payload);
  })
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
