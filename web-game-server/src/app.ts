import { createExpressSever } from './module/express';
import dotenv from 'dotenv';
import { keyWordType, chatType, userType } from './interface';
dotenv.config();

export const bootstrap = async () => {
  const [server, io] = createExpressSever();
  const currentUserList: userType[] = [];
  io.on('connection', (socket: any) => {
    socket.on('addGameRoom', (gameRoom: any) => {
      io.emit('addGameRoom', gameRoom);
    });
    socket.on('enterGameRoom', (user: userType) => {
      console.log(user);
      const isOldUser = currentUserList.find(({ userId }: userType) => user.userId === userId);
      if (isOldUser) {
        return;
      } else {
        io.emit('enterGameRoom', user);
      }
    });
    socket.on('drawing', (onDrawingEvent: any) => {
      io.emit('drawing', onDrawingEvent);
    });
    socket.on('addChat', (chatData: chatType) => {
      io.emit('addChat', chatData);
    });

    socket.on('nextStep', (step: number) => {
      io.emit('nextStep', step);
    });

    socket.on('setKeyword', (keyword: keyWordType) => {
      io.emit('setKeyword', keyword);

    });
  });

  server.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 server is running`);
  });
};
