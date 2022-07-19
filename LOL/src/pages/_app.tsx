import * as React from 'react';
import '../styles/reset.css';
import { AppLayout } from '../components';
import 'antd/dist/antd.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
