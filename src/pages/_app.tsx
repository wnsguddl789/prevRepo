import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { LayoutProvider, AuthProvider } from "../context";
import { GetServerSideProps } from "next";
import { getProviders, getSession } from "next-auth/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <AuthProvider>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/game",
      },
    };
  } else {
    return {
      props: { providers },
      redirect: {
        destination: "/auth/SignIn",
      },
    };
  }
};
export default MyApp;
