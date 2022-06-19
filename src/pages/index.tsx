/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { AppLayout } from '../components';
import { Button as AntdButton } from 'antd';
import styled from '@emotion/styled';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => (
  <AppLayout>
    <img style={{ position: 'absolute', width: '100vw' }} draggable="false" className="background-image" src="/cool-background.svg" />
    <LandingContainer>
      <p className="title">
        <span className="bold">T</span>oady <span className="bold">I</span> <span className="bold">L</span>earned
        <br /> 기록해봐요 !
      </p>
      <Button size="large" shape="round" onClick={() => signIn()}>
        시작하기
      </Button>
    </LandingContainer>
  </AppLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = {};
  const session = await getSession(context);
  if (session) {
    return {
      props,
      redirect: {
        destination: '/dairy',
      },
    };
  } else {
    return {
      props,
    };
  }
};

export default Home;

const LandingContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 65px);
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    position: relative;
    font-size: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    span.bold {
      font-weight: 700;
    }
  }
`;

const Button = styled(AntdButton)`
  /* padding: 0px; */
`;
