import { keyWordType } from './index';
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  addGameRoom: (gameRoom: any) => void;
  drawing: (onDrawingEvent: any) => void;
  enterGameRoom: (name: string) => void;
  addChat: (chatData: any) => void;
  nextStep: (step: number) => void;
  setKeyword: (keyword: keyWordType) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData };
