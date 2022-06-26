import * as React from "react";
import { Container, RoomList, RoomCard } from "../styles";
type chatType = {
  message: string;
  name: string;
};
interface GameRoomViewProps {
  data: any;
  isMaster: boolean;
}

export const GameRoomView: React.FunctionComponent<GameRoomViewProps> = ({
  data,
  isMaster,
}) => {
  return (
    <Container>
      {isMaster ? (
        <span>방장입니다</span>
      ) : (
        <span>일반유저가 진짜 맞습니다.</span>
      )}
      {isMaster ? <Canvas /> : null}
    </Container>
  );
};

const Canvas = () => {
  return <canvas />;
};
