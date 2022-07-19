import * as React from 'react';
import { TodoView } from '../views';
import { TodoModelType } from '../types';

export const TodoViewController: React.FunctionComponent<TodoModelType> = ({
	todoModel: { addTodo, todoList },
}) => {
	const [todo, setTodo] = React.useState<string>('');

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
