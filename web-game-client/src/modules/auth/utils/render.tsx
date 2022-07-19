import {
	KakaoOAuthButton,
	GithubOAuthButton,
	NaverOAuthButton
} from "../../../components";
import { signIn } from "next-auth/react";
import React from "react";

const OAuthList = [
	{
		id: "github",
		render: () => <GithubOAuthButton onClick={() => signIn("github")} />
	},
	{
		id: "naver",
		render: () => <NaverOAuthButton onClick={() => signIn("naver")} />
	},
	{
		id: "kakao",
		render: () => <KakaoOAuthButton onClick={() => signIn("kakao")} />
	}
];

const RenderOauthButton = () => {
	return (
		<React.Fragment>
			{OAuthList.map(({ render }, index) => (
				<React.Fragment key={`renderOuths-${index}`}>
					{render()}
				</React.Fragment>
			))}
		</React.Fragment>
	);
};

export { RenderOauthButton };
