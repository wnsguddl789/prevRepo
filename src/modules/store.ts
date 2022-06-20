import { TodoRootStore } from './';
import { useLocalObservable } from 'mobx-react';
export const RootStore = () => {
	return {
		useTodoStore: () => useLocalObservable(TodoRootStore),
	};
};
