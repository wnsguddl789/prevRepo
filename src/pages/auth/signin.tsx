/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getProviders, signIn, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { KakaoOAuthButton, GithubOAuthButton, NaverOAuthButton } from '../../components';
export default function SignIn({ providers }: any) {
  return (
    <React.Fragment>
      <img style={{ position: 'fixed', width: '100vw' }} draggable="false" className="background-image" src="/cool-background.svg" />
      <SignInContainer>
        <h1>TIL기록장에 로그인하기</h1>
        <SignInButtonContainer>
          {Object.values(providers).map(({ name, id }: any) => (
            <div key={name}>
              {id === 'github' ? (
                <GithubOAuthButton onClick={() => signIn(id)} />
              ) : id === 'naver' ? (
                <NaverOAuthButton onClick={() => signIn(id)} />
              ) : (
                id === 'kakao' && <KakaoOAuthButton onClick={() => signIn(id)} />
              )}
            </div>
          ))}
        </SignInButtonContainer>
      </SignInContainer>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/diary',
      },
    };
  } else {
    return {
      props: { providers },
    };
  }
};
const SignInContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 36px;
    font-weight: 800;
    letter-spacing: 3px;
  }
`;
const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
