import type { NextPage } from 'next';
import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import Game from '../components/Game';
const initVal = {
  stage: 1,
  time: 15,
  score: 0,
};
const Home: NextPage = () => {
  const [stage, setStage] = useState(initVal.stage);
  const [time, setTime] = useState(initVal.time);
  const [score, setScore] = useState(initVal.score);

  const intervalRef = useRef(initVal.time);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setTime((intervalRef.current -= 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (intervalRef.current <= 0) {
      alert('게임종료');
      location.reload();
      return;
    }
  }, [intervalRef]);
  /*
   * 정답을 맞췄을때 실행될 함수
   */
  const handleCorrect = () => {
    setStage(stage + 1);
    setTime((intervalRef.current = initVal.time));
    setScore(score + 1);
    console.log(stage, score);
  };

  /*
   * 오답을 눌렀을때 실행될 함수
   */
  const handleWrong = () => {
    if (intervalRef.current <= 0) {
      alert('게임종료');
      location.reload();
      return;
    }
    setTime((intervalRef.current -= 1));

    // console.log(stage, score);
  };
  return (
    <Container>
      <ScoreBoard>
        스테이지:{stage}, 남은시간:{time}, 점수: {score}
      </ScoreBoard>
      <Game handleCorrect={handleCorrect} handleWrong={handleWrong} NUMBER={stage + 1} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 10px;
`;
const ScoreBoard = styled.div`
  padding-bottom: 10px;
`;
