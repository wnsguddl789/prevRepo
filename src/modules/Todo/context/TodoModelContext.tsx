import * as React from 'react';
import { useLocalObservable } from 'mobx-react';
import { hasChildren } from 'src/types';

import { TodoModel } from '../models';

const TodoModelContext = React.createContext<any>(null);
const TodoModelConsumer = TodoModelContext.Consumer;

const TodoModelProvider: React.FunctionComponent<hasChildren> = ({ children }) => {
	const todoModel = useLocalObservable(TodoModel);
	return <TodoModelContext.Provider value={todoModel}>{children}</TodoModelContext.Provider>;
};

const useTodoModel = () => React.useContext(TodoModelContext);

export { TodoModelContext, TodoModelConsumer, TodoModelProvider, useTodoModel };
