import 'styles/reset.css';
import type { AppProps } from 'next/app';

import { AppProvider } from 'src/context';
import { AppLayout } from 'src/components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</AppProvider>
	);
}

export default MyApp;
