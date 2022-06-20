import { todoType } from 'src/types';

interface TodoModelType {
	todoModel: {
		todoList: todoType[];
		addTodo: (text: string) => void;
		getTodoList: () => todoType[];
		getDoneTodoList: () => todoType[];
	};
}

export type { TodoModelType };
