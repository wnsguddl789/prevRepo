import * as React from "react";
import { Container } from "../styles";
import { renderOauthButton } from "../utils";

interface SignInViewProps {
  providers: any;
}

export const SignInView: React.FunctionComponent<SignInViewProps> = ({
  providers,
}) => <Container>{renderOauthButton(providers)}</Container>;
