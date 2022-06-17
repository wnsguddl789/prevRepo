import '../../styles/reset.css';
import type { AppProps } from 'next/app';

import { RootProvider, TodoProvider } from '../context';
import { AppLayout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootProvider>
			<TodoProvider>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</TodoProvider>
		</RootProvider>
	);
}

export default MyApp;
