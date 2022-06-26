import {
  KakaoOAuthButton,
  GithubOAuthButton,
  NaverOAuthButton,
} from "../../../components";
import { signIn } from "next-auth/react";

const renderOauthButton = ({ providers }: any) => {
  return Object.values(providers).map(({ name, id }: any) => (
    <div key={name}>
      {id === "github" && <GithubOAuthButton onClick={() => signIn(id)} />}
      {id === "naver" && <NaverOAuthButton onClick={() => signIn(id)} />}
      {id === "kakao" && <KakaoOAuthButton onClick={() => signIn(id)} />}
    </div>
  ));
};

export { renderOauthButton };
