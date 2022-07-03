export type gameRoomType = {
	id?: string;
	roomTitle: string;
	maxUser: number;
	currentUser: number;
	masterUserId: number | string;
};

export type chatType = {
	message: string;
	name: string;
};

export type keyWordType = {
	index: string;
	keyword: string;
};
export type userType = {
	userId: string;
	name: string;
};
