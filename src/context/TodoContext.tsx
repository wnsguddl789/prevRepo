import * as React from 'react';
import { useLocalObservable } from 'mobx-react';

import { hasChildren } from '../types';
import { TodoStore } from '../modules';

const TodoContext = React.createContext({});
const TodoConsumer = TodoContext.Consumer;

interface TodoProviderProps extends hasChildren {}

const TodoProvider: React.FunctionComponent<TodoProviderProps> = ({ children }) => {
	const todoStore = useLocalObservable(TodoStore);
	return <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>;
};

const useTodoStore = () => React.useContext(TodoContext);

export { TodoContext, TodoConsumer, TodoProvider, useTodoStore };
