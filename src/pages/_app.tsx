import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '../../styles/reset.css';
import AppLayout from '../components/AppLayout';
import { ROUTES } from '../constant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

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
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/page.html" />
        <meta property="og:title" content="Content Title" />
        <meta
          property="og:image"
          content="https://media.vlpt.us/images/wnsguddl789/post/e78f377c-d471-4780-9246-10e8eb755de4/image%20(1).png"
        />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name" />
        <meta property="og:locale" content="en_US" />
      </Head>
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
