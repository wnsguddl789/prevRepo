import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '../../styles/reset.css';
import AppLayout from '../components/AppLayout';
import { ROUTES } from '../constant';
import { GetServerSideProps } from 'next';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [title, setTitle] = useState('');
  const pathName = useRouter().pathname;

  useEffect(() => {
    ROUTES.map((route) => {
      if (route.PATH === pathName) {
        setTitle(` - ${route.LABEL}`);
      }
    });
  });
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Nomflix{title}</title>
        </Helmet>
      </HelmetProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default MyApp;
export async function getServerSideProps(context: GetServerSideProps) {
  try {
  } catch (err) {}
  return {
    props: {}, // will be passed to the page component as props
  };
}
