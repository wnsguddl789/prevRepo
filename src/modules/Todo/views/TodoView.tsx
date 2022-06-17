import * as React from 'react';
import { Observer } from 'mobx-react';
import { TodoViewStyles as styles } from '../styles';

interface TodoViewProps {
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	todo: any;
	todoList: any;
}

export const TodoView: React.FunctionComponent<TodoViewProps> = ({
	onSubmit,
	onChange,
	todo,
	todoList,
}) => {
	return (
		<Observer>
			{() => (
				<div style={styles.container}>
					<form style={styles.form} onSubmit={onSubmit}>
						<input style={styles.input} type="text" name="todo" value={todo} onChange={onChange} />
						<button type="submit">저장</button>
					</form>
					<div style={styles.todoListContainer}>
						{todoList.map((list: any) => {
							return <p>{list.content}</p>;
						})}
					</div>
				</div>
			)}
		</Observer>
	);
};
