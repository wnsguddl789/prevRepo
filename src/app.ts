import { createExpressSever } from "./module/express";
import dotenv from "dotenv";

dotenv.config();

export const bootstrap = async () => {
  const [server, io] = createExpressSever();

  io.on("connection", (socket: any) => {
    console.log("a user connected");
    socket.on("add_gameRoom", (gameRoom: any) => {
      io.emit("add_gameRoom", gameRoom);
    });
  });

  server.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 server is running`);
  });
};
