import { useLocalObservable } from "mobx-react";
import { TodoModel } from "./models";
import { TodoRootStoreReturnType } from "src/types";

export const TodoRootStore: TodoRootStoreReturnType = () => {
	return {
		useTodoModel: () => useLocalObservable(TodoModel)
	};
};
