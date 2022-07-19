import * as React from "react";
import { SignInPage } from "../../modules";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function SignInConsumer(props: any) {
	return <SignInPage />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (session) {
		return {
			props: {},
			redirect: {
				destination: "/game"
			}
		};
	} else {
		return {
			props: {}
		};
	}
};
