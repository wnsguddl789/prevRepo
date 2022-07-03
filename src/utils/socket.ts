import socketIOClient, { Socket } from "socket.io-client";
import { addGameType } from "../types/game";

interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
	addGameRoom: (gameType: addGameType) => void;
	enterGameRoom: (name: string) => void;
	drawing: () => void;
}

interface ClientToServerEvents {
	hello: () => void;
}

interface InterServerEvents {
	ping: () => void;
}

interface SocketData {
	name: string;
	age: number;
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
	socketIOClient("http://localhost:4000");
