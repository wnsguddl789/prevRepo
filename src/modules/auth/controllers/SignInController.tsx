import * as React from "react";
import { SignInView } from "../views";

interface SignInControllerProps {
  providers: any;
}
export const SignInController: React.FunctionComponent<
  SignInControllerProps
> = ({ providers }) => {
  return <SignInView providers={providers} />;
};
