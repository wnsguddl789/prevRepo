import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { IMAGE } from '../constant';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
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
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 50px;
    margin-bottom: 40px;
  }
  & > div {
    max-width: 80%;
    width: 50%;
    display: flex;
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
