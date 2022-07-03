/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { GameRoomView } from "../views";
import { socket } from "../../../utils";
import { useRouter, useCanvas, useSession } from "../../../hooks";
type chatType = {
	message: string;
	name: string;
};

export const GameRoomController: React.FunctionComponent = ({
	roomData
}: any) => {
	const [isMaster, setIsMaster] = React.useState<boolean>(false);
	const [currentUser, setCurrentUser] = React.useState<any[]>([]);
	const { prepareCanvas, contextRef } = useCanvas();
	const [canvas, setCanvas] = React.useState();
	const {
		query: { roomId }
	} = useRouter();
	const session = useSession();

	React.useEffect(() => {
		prepareCanvas();
		console.log(contextRef);
		socket.on("drawing", contextRef);
	}, [contextRef]);

	React.useEffect(() => {
		if (session?.user.id === roomId) {
			const name = String(session?.user.name);
			socket.on("enterGameRoom", {
				name
			});
			setCurrentUser((old) => [...old, { name }]);
			setIsMaster(true);
		} else {
			setIsMaster(false);
		}
	}, [roomId, session]);

	return <GameRoomView data={roomData} isMaster={isMaster} />;
};
