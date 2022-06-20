import * as React from 'react';
import { useLocalObservable } from 'mobx-react';

import { hasChildren } from 'src/types';
import { TodoRootStore } from 'src/modules';

type todoContextType = {
	useTodoModel: () => any;
};

const AppContext = React.createContext<todoContextType>({
	useTodoModel: () => {},
});
const AppConsumer = AppContext.Consumer;

const AppProvider: React.FunctionComponent<hasChildren> = ({ children }) => {
	const appRootStore = useLocalObservable(TodoRootStore);
	return <AppContext.Provider value={appRootStore}>{children}</AppContext.Provider>;
};

const useAppStore = () => React.useContext(AppContext);

export { AppContext, AppConsumer, AppProvider, useAppStore };
