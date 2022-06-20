import { nanoid } from 'nanoid';
import { todoType } from 'src/types';

export const TodoModel: any = () => {
	return {
		todoList: [],
		addTodo(text: string) {
			const todo: todoType = {
				id: nanoid(),
				content: text,
				isDone: false,
			};
			this.todoList.push(todo);
		},

		getTodoList() {
			return this.todoList;
		},

		getDoneTodoList() {},
	};
};
