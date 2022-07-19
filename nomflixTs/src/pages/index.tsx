import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IMAGE } from '../constant';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../reducers/user';
import Image from 'next/image';
import FB_Logo from '../../public/assets/FB_Logo.png';
const Home: NextPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(LoginAction());
  };
  return (
    <Container isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <>
          <p>놈플릭스를 시청할 프로필을 선택하세요.</p>
          <div>
            {IMAGE &&
              IMAGE.map((img, idx: number) => {
                let text = '';
                return (
                  <div key={idx} onClick={() => router.push('/Movie')}>
                    <Card src={img.src}></Card>
                    <p> {idx === 4 ? (text = 'KIDS') : (text = 'User ' + String(idx + 1))}</p>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <SignInContainer>
          <h2>로그인</h2>
          <InputContainer isBtn={false}>
            <Label>이메일 주소 또는 전화번호</Label>
            <Input type={'email'} />
          </InputContainer>
          <InputContainer isBtn={false}>
            <Label>비밀번호</Label>
            <Input type={'password'} />
          </InputContainer>
          <InputContainer isBtn={true} onClick={() => handleLogin()}>
            로그인
          </InputContainer>
          <CheckBoxContainer>
            <div>
              <input type={'checkbox'} />
              <span>로그인 정보 저장</span>
            </div>
            <span>도움이 필요하신가요?</span>
          </CheckBoxContainer>
          <SocialLoginContainer className="cursor">
            <Image src={FB_Logo} width={20} height={20} alt="FaceBook Logo" />
            <span>Facebook으로 로그인</span>
          </SocialLoginContainer>
        </SignInContainer>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div<{
  isLoggedIn: boolean;
}>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > p {
    font-size: 50px;
    margin-bottom: 40px;
  }
  & > div {
    max-width: 80%;
    width: 50%;
    display: flex;
    position: relative;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    div > p {
      margin: 20px;
      line-height: 1.5;
      font-size: 24px;
      color: grey;
    }
  }

  background-size: cover;
  ::before {
    content: '';
    background-image: ${(props) =>
      props.isLoggedIn
        ? null
        : `url(
          'https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/79c3c9e6-9da9-4265-9e1e-c4ae6d0fbf2c/KR-ko-20220207-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        )`};
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  /* opacity: ${(props) => (props.isLoggedIn ? 1 : 0.5)}; */
`;
const Card = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: 100%;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 3px white;
  }
`;

const SignInContainer = styled.form`
  position: absolute;
  top: 20;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  padding: 60px 68px 40px;

  border-radius: 10px;
  & > h2 {
    font-size: 36px;
    margin: 20px 0;
  }
  span {
    color: #737373;
  }
  p {
    font-size: 16px;
  }
  .cursor {
    cursor: pointer;
  }
`;
const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  & > span {
    cursor: pointer;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const SocialLoginContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  & > span {
    margin-left: 10px;
  }
`;
const InputContainer = styled.label<{ isBtn: boolean }>`
  margin: ${(props) => (props.isBtn ? '20px 0' : '10px 0')};
  background-color: ${(props) => (props.isBtn ? '#E52213' : '#E8F0FE')};
  color: ${(props) => (props.isBtn ? 'white' : 'black')};
  cursor: ${(props) => (props.isBtn ? 'pointer' : 'black')};
  font-size: ${(props) => (props.isBtn ? '20px' : null)};
  text-align: ${(props) => (props.isBtn ? 'center' : 'left')};
  border-radius: 5px;
  width: 320px;
  height: 55px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px 0;
  background-color: transparent;
`;
const Label = styled.label``;
