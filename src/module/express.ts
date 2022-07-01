import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "../interface";

export const createExpressSever = () => {
  const app = express();
  const server = createServer(app);

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  return [server, io];
};
