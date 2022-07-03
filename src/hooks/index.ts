import { useRouter as useNextRouter } from "next/router";
import {
	useCanvas as useContextCanvas,
	useSession as useContextSession
} from "../context";

const useRouter = () => useNextRouter();
const useCanvas = () => useContextCanvas();
const useSession = () => useContextSession();

export { useRouter, useCanvas, useSession };
