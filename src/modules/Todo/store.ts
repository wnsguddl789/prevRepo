import { nanoid } from 'nanoid';

type todoType = {
	id: number;
	content: string;
	done: boolean;
};

interface TodoStoreType {
	todoList: todoType[];
	addTodo: () => {};
	getTodoList: () => todoType[];
	getDoneTodoList: () => todoType[];
}

export const TodoStore: TodoStoreType = () => {
	return {
		todoList: [],
		addTodo(text: string) {
			const todo: todoType = {
				id: parseInt(nanoid()),
				content: text,
				done: false,
			};
			console.log(text);
			this.todoList.push(todo);
		},

		getTodoList() {
			return this.todoList;
		},

		getDoneTodoList(el: any) {
			const doneList: todoType[] = this.todoList.filter((list) => list.done);
		},
	};
};
