import * as React from "react";
import { Container, RoomList, RoomCard, Header } from "../styles";

interface GameLobbyViewProps {
	session: any;
	gameRooms: any;
	router: any;
	addRoom: () => void;
	signOut: () => void;
}

export const GameLobbyView: React.FunctionComponent<GameLobbyViewProps> = ({
	session,
	router,
	addRoom,
	signOut,
	gameRooms
}) => (
	<Container>
		<Header>
			<span>{gameRooms.length}개의 게임이 존재합니다.</span>
			<div>
				<button onClick={addRoom}>방생성</button>
				<button onClick={signOut}>로그아웃</button>
			</div>
		</Header>
		<RoomList>
			{gameRooms.map(
				(
					{ id, title, maxUser, currentUser, masterUserId }: any,
					roomIndex: number
				) => (
					<RoomCard key={`room-${roomIndex}`}>
						<p className="root-title">{title}님의 게임방</p>
						<p className="room-user-list">
							{currentUser} / {8}명
						</p>
						<button
							className="room-button"
							onClick={() => router.push(`/game/${masterUserId}`)}
						>
							입장
						</button>
					</RoomCard>
				)
			)}
		</RoomList>
	</Container>
);
