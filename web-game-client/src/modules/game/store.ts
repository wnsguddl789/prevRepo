import { useLocalObservable } from "mobx-react";
import { GameRoomModel } from "./models";
import { GameStoreReturnType } from "../../types";

export const GameStore: GameStoreReturnType = () => {
  return {
    useGameRoomModel: () => useLocalObservable(GameRoomModel),
  };
};
