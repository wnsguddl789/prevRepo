import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { SignInPage } from "../modules";

const Home: NextPage = () => {
  return <SignInPage />;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = {};
  const session = await getSession(context);
  if (!session) {
    return {
      props,
      redirect: {
        destination: "/auth/SignIn",
      },
    };
  } else {
    return {
      props,
      redirect: {
        destination: "/game",
      },
    };
  }
};
export default Home;
