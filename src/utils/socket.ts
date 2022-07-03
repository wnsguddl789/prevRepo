import socketIOClient, { Socket } from "socket.io-client";
import { addGameType } from "../types/game";

export interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
	addGameRoom: (gameRoom: any) => void;
	drawing: (onDrawingEvent: any) => void;
	enterGameRoom: (user: any) => void;
	addChat: (chatData: any) => void;
	nextStep: (step: number) => void;
	setKeyword: (keyword: any) => void;
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
