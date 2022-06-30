// import { TodoRootStore } from "./";
import { StoreType } from "../types";
import { GameStore } from "./";
const types: StoreType = {
  GAME_STORE: "useGameStore",
};

export const RootStore: any = (storeType: keyof StoreType) => {
  let instance: boolean = false;

  const createInstance = () => (instance = true);

  const stores: StoreType = {
    GAME_STORE: GameStore(),
  };

  const getStore = () => {
    if (!instance) createInstance();
    if (instance) {
      const storeName = types[storeType];
      if (!storeName) return;
      else return stores[storeType];
    }
  };
  return getStore();
};
