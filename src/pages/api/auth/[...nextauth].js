import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID,
			clientSecret: process.env.KAKAO_CLIENT_SECRET
		}),
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID,
			clientSecret: process.env.NAVER_CLIENT_SECRET
		})
	],
	secret: process.env.SECRET,
	theme: {
		colorScheme: "light"
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60 // 30 days
	},
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, user, token }) {
			session = {
				...session,
				user: {
					...session.user,
					id: token.sub
				},
				accessToken: token.accessToken
			};
			return session;
		},
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		}
	},
	pages: {
		signIn: "/auth/signin"
	}
});
