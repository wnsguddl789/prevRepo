import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import 'moment/locale/ko';
// import '@toast-ui/editor/dist/toastui-editor.css';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
