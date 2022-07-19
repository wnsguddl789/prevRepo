import type { AppProps } from 'next/app';
import '../../styles/reset.css';
import Layout from '../components/Layout/AppLayout';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
