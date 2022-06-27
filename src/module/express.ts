import express from "express";
import { Server } from "socket.io";
import http from "http";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "../interface";

export const createExpressSever = () => {
  const app = express();
  const server = http.createServer(app);
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server);

  return [server, io];
};
