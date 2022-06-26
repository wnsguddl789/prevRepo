import * as React from "react";
import { Container, RoomList, RoomCard, Header } from "../styles";

interface GameLobbyViewProps {
  session: any;
  data: any;
  router: any;
  signOut: () => void;
}

export const GameLobbyView: React.FunctionComponent<GameLobbyViewProps> = ({
  session,
  router,
  signOut,
  data: { gameRooms },
}) => (
  <Container>
    <Header>
      <span>{gameRooms.length}개의 게임이 존재합니다.</span>
      <button onClick={signOut}>로그아웃</button>
    </Header>
    <RoomList>
      {gameRooms.map(
        (
          { id, roomTitle, maxUser, currentUser, masterUserId }: any,
          roomIndex: number
        ) => (
          <RoomCard key={`room-${roomIndex}`}>
            <p className="root-title">{roomTitle}</p>
            <p className="room-user-list">
              {currentUser} / {maxUser}명
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
