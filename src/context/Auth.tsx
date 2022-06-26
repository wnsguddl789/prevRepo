import * as React from "react";
import { useSession as useNextSession } from "next-auth/react";
const AuthContext = React.createContext<any | null>(null);
const AuthConsumer = AuthContext.Consumer;

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const { data: session } = useNextSession();
  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};

const useSession = () => React.useContext(AuthContext);

export { AuthContext, AuthConsumer, AuthProvider, useSession };
