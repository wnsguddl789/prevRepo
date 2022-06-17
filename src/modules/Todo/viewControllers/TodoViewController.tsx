import * as React from 'react';
import { TodoView } from '../views';
import { useTodoStore } from '../../../context';

type todoType = string;

export const TodoViewController: React.FunctionComponent = () => {
	const { addTodo, todoList } = useTodoStore();
	const [todo, setTodo] = React.useState<todoType>('');

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (todo !== '') {
			addTodo(todo);
			setTodo('');
		}
	};

	const onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) =>
		setTodo(value);

	return <TodoView onChange={onChange} todo={todo} onSubmit={onSubmit} todoList={todoList} />;
};
