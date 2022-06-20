import * as React from 'react';
import { NextPage } from 'next';

import { TodoPage, TodoModelProvider } from 'src/modules/Todo';

const TodoList: NextPage = () => {
	return (
		<TodoModelProvider>
			<TodoPage />
		</TodoModelProvider>
	);
};

export default TodoList;
