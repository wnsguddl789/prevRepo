import * as React from "react";
import { TodoViewController } from "../viewControllers";
import { RootStore } from "@modules/store";

export const TodoPage: React.FunctionComponent = () => {
	const { useTodoModel } = RootStore("TODO_STORE");
	const todoModel = useTodoModel();

	return <TodoViewController todoModel={todoModel} />;
};
