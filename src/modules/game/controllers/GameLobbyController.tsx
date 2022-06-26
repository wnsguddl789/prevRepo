import * as React from "react";
import { GameLobbyView } from "../views";
import { signOut } from "next-auth/react";
import { useSession } from "../../../context";
import { useRouter } from "next/router";

export const GameLobbyController: React.FunctionComponent = ({ data }: any) => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  return (
    <GameLobbyView
      data={data}
      session={session}
      router={router}
      signOut={signOut}
    />
  );
};
