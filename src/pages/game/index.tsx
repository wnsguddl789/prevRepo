import * as React from "react";
import { GameLobbyPage } from "../../modules";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { socket } from "../../utils";

export default function GameLobby(props: any) {
	return <GameLobbyPage {...props} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const props = { socket };
	const session = await getSession(context);
	if (!session) {
		return {
			props,
			redirect: {
				destination: "/auth/SignIn"
			}
		};
	} else {
		return {
			props: {}
		};
	}
};
