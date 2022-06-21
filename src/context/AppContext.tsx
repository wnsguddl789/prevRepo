import * as React from "react";
import { useLocalObservable } from "mobx-react";
import { hasChildren } from "src/types";
import { RootStore } from "src/modules";

type todoContextType = any;

const AppContext = React.createContext<todoContextType | null>(null);
const AppConsumer = AppContext.Consumer;

const AppProvider: React.FunctionComponent<hasChildren> = ({ children }) => {
	const appStore = useLocalObservable(RootStore);
	return (
		<AppContext.Provider value={appStore}>{children}</AppContext.Provider>
	);
};

const useAppStore = () => React.useContext(AppContext);

export { AppContext, AppConsumer, AppProvider, useAppStore };
