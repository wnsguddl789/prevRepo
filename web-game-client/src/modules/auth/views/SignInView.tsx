import * as React from "react";
import { Container } from "../styles";
import { RenderOauthButton } from "../utils";

interface SignInViewProps {}

export const SignInView: React.FunctionComponent<SignInViewProps> = ({}) => (
	<Container>
		<RenderOauthButton />
	</Container>
);
