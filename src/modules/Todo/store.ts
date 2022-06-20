import { useLocalObservable } from 'mobx-react';
import { TodoModel } from './models';
export const TodoRootStore = () => {
	return {
		useTodoModel: () => useLocalObservable(TodoModel),
	};
};
