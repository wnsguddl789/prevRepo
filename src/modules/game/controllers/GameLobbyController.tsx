import * as React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

import { GameLobbyView } from "../views";
import { useSession } from "../../../context";
import { gameRoomType } from "../types";
import { socket } from "../../../utils";
import { addGameType } from "../../../types/game";

export const GameLobbyController: React.FunctionComponent = ({
	gameRoomModel
}: any) => {
	const session = useSession();
	const router = useRouter();
	const [gameRooms, setGameRooms] = React.useState<gameRoomType[] | any[]>(
		[]
	);

	const addRoom = () => {
		socket.emit("addGameRoom", {
			title: session?.user?.name,
			currentUser: 1,
			masterUserId: session?.user?.id
		});
	};

	React.useEffect(() => {
		socket.on(
			"addGameRoom",
			({ title, currentUser, masterUserId }: addGameType) => {
				setGameRooms([
					...gameRooms,
					{
						title,
						currentUser,
						masterUserId
					}
				]);
			}
		);
	}, [gameRooms]);

	return (
		<GameLobbyView
			gameRooms={gameRooms}
			addRoom={addRoom}
			session={session}
			router={router}
			signOut={signOut}
		/>
	);
};

type stateType = {
	title: string;
	currentUser: number;
	masterUserId: null | string | number;
};
