import { useTodoModel } from './context';

export const TodoRootStore = () => {
	return {
		useTodoModel: () => useTodoModel(),
	};
};
