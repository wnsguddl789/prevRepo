import * as React from 'react';
import { hasChildren } from '../types';

const RootContext = React.createContext({});
const RootConsumer = RootContext.Consumer;

interface RootProviderProps extends hasChildren {}

const RootProvider: React.FunctionComponent<RootProviderProps> = ({ children }) => {
	const sayHello = () => console.log('hello');
	return <RootContext.Provider value={sayHello}>{children}</RootContext.Provider>;
};

export { RootContext, RootConsumer, RootProvider };
