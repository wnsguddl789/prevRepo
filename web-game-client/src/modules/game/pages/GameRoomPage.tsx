import * as React from "react";
import { GameRoomController } from "../controllers";
export const GameRoomPage: React.FunctionComponent = (props) => {
  return <GameRoomController {...props} />;
};
