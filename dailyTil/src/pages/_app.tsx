import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import 'moment/locale/ko';

import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Today I Learned 기록해보아요!</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
