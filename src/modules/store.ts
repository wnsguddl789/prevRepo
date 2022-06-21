import { TodoRootStore } from "./";
import { StoreType } from "src/types";

const types: StoreType = {
	TODO_STORE: "useTodoStore"
};

export const RootStore: any = (storeType: keyof StoreType) => {
	let instance: boolean = false;

	const createInstance = () => (instance = true);

	const stores: StoreType = {
		TODO_STORE: TodoRootStore()
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
