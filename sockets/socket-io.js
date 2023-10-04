import * as socketIo from "socket.io";
import socketJwt from "socketio-jwt";

const configureSocketIO = (server) => {
  const io = new socketIo.Server(server);

  io.use(
    socketJwt.authorize({
      secret: "your-secret-key",
      handshake: true,
    })
  );

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle code synchronization here using socket.io
    socket.on("code-change", (data) => {
      // You can add authorization checks here to control code changes
      socket.broadcast.emit("code-change", data.newCode);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

export default configureSocketIO;
