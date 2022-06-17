import * as React from 'react';
import { hasChildren } from '../types';
interface AppLayoutProps extends hasChildren {}

export const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ children }) => {
	return <div style={styles.AppContainer}>{children}</div>;
};

const styles = {
	AppContainer: {
		display: 'flex',
		flex: 1,
		backgroundColor: 'teal',
		height: '100vh',
	},
};
