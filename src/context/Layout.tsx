import styled from "@emotion/styled";
import * as React from "react";
import { useSession } from "./Auth";
import { signOut } from "next-auth/react";
const LayoutContext = React.createContext<any | null>(null);
const LayoutConsumer = LayoutContext.Consumer;

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LayoutProvider: React.FunctionComponent<LayoutProviderProps> = ({
  children,
}) => {
  const styles = {};
  return (
    <LayoutContext.Provider value={styles}>
      <AppLayout>{children}</AppLayout>
    </LayoutContext.Provider>
  );
};

const useDarkMode = () => React.useContext(LayoutContext);

export { LayoutContext, LayoutConsumer, LayoutProvider, useDarkMode };

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const AppHeader = styled.div``;
