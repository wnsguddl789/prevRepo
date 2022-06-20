import * as React from 'react';
import { TodoViewController } from '../viewControllers';
import { useAppStore } from 'src/context';

export const TodoPage: React.FunctionComponent = () => {
	const { useTodoModel } = useAppStore();

	const todoModel = useTodoModel();
	return <TodoViewController todoModel={todoModel} />;
};
