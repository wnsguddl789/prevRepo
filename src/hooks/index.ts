import { useRouter as useNextRouter } from "next/router";
import {
	useCanvas as useContextCanvas,
	useSession as useContextSession
} from "../context";
import { socket } from "../utils";
const useRouter = () => useNextRouter();
const useCanvas = () => useContextCanvas();
const useSession = () => useContextSession();

const setSocketServer = (msg: string, data: any) => socket.emit(msg, data);

export { useRouter, useCanvas, useSession, setSocketServer };
