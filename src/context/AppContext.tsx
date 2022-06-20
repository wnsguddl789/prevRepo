import * as React from 'react';

import { hasChildren } from 'src/types';
import { RootStore } from 'src/modules';

type todoContextType = {
	useTodoStore: () => any;
};

const AppContext = React.createContext<todoContextType>({
	useTodoStore: () => {},
});
const AppConsumer = AppContext.Consumer;

const AppProvider: React.FunctionComponent<hasChildren> = ({ children }) => {
	const appStore = RootStore();
	return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

const useAppStore = () => React.useContext(AppContext);

export { AppContext, AppConsumer, AppProvider, useAppStore };
