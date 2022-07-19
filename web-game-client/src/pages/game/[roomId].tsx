import * as React from "react";
import { GameRoomPage } from "../../modules";

import { data } from "../../utils/data";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function GameRoom(props: any) {
	return <GameRoomPage {...props} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const {
		query: { roomId }
	} = context;
	const roomData = data.gameRooms.find(
		({ masterUserId }: any) => JSON.stringify(masterUserId) === roomId
	);
	const session = await getSession(context);
	return {
		props: {}
	};
	// if (roomData) {
	//   return {
	//     props: { roomData, session },
	//   };
	// } else {
	//   return {
	//     props: {},
	//     redirect: {
	//       destination: "/game",
	//     },
	//   };
	// }
};
