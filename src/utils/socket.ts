import socketIOClient, { Socket } from "socket.io-client";

export const socket = socketIOClient("http://localhost:4000");
