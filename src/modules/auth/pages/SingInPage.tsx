import * as React from "react";
import { SignInController } from "../controllers";
export const SignInPage: React.FunctionComponent = (providers) => {
  return <SignInController providers={providers} />;
};
