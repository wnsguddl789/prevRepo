import * as React from "react";
import { RootStore } from "../../store";
import { GameLobbyController } from "../controllers";

export const GameLobbyPage: React.FunctionComponent = (props) => {
	const { useGameRoomModel } = RootStore("GAME_STORE");
	const gameRoomModel = useGameRoomModel();

	return <GameLobbyController {...props} />;
};
