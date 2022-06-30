export type gameRoomType = {
  id?: string;
  roomTitle: string;
  maxUser: number;
  currentUser: number;
  masterUserId: number | string;
};
