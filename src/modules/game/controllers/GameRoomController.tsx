import * as React from "react";
import { GameRoomView } from "../views";
import { socket } from "../../../utils";

type chatType = {
  message: string;
  name: string;
};

export const GameRoomController: React.FunctionComponent = ({
  roomData,
  session: {
    user: { id: userId },
  },
}: any) => {
  const isMaster = parseInt(userId) === roomData.masterUserId;

  return <GameRoomView data={roomData} isMaster={isMaster} />;
};
