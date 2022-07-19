import React from 'react';
import styled from '@emotion/styled';
import { useSession, signOut } from 'next-auth/react';
import { Button, Image } from 'antd';

export const AppHeader: React.FunctionComponent = () => {
  const { data: session } = useSession();
  return (
    <Container>
      <span className="logo">TIL 일기장</span>
      <div className="action-tab">
        {session && (
          <div className="user-info-tab">
            {session?.user?.name ? <span>{`${session?.user?.name}님`} 안녕하세요</span> : <span>안녕하세요!</span>}
            {session?.user?.image && <Image src={session?.user?.image} height={40} alt="프로필사진" className="profile-image" />}
          </div>
        )}
        {session && (
          <Button shape="round" onClick={() => signOut()}>
            로그아웃
          </Button>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  padding: 10px 20px;
  margin: 0px auto;
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 8px 0px;
  background-color: #fff;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;

    line-height: 2.5;
    .action-tab {
      display: flex;
      flex: 1;
      width: 100%;
      justify-content: start;
    }
  }

  .logo {
    font-size: 20px;
    font-weight: 700;
  }

  .action-tab {
    display: flex;
    align-items: center;

    .user-info-tab {
      display: flex;
      justify-content: start;
      align-items: center;
      flex: 1;
      & > * {
        margin-right: 10px;
      }
      margin-right: 20px;
    }
  }

  .profile-image {
    border-radius: 50%;
  }
`;
