import { nanoid } from "nanoid";

import { gameRoomType } from "../types";
import { socket } from "../../../utils";

export const GameRoomModel: GameRoomModelReturnType = () => {
	return {
		gameRoomList: [],

		addGameRoom({
			roomTitle,
			maxUser,
			currentUser,
			masterUserId
		}: gameRoomType) {
			const gameRoom = {
				id: nanoid(),
				roomTitle,
				maxUser,
				currentUser,
				masterUserId
			};
			// socket.emit("add gameRoom", gameRoom);
			this.gameRoomList.push(gameRoom);
		}
	};
};

type GameRoomModelReturnType = () => {
	gameRoomList: gameRoomType[];
};
