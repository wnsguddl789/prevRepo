import type { NextPage } from 'next';
import React, { useEffect, useState, useRef, useCallback } from 'react';
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

  /*
   * 게임종료
   */
  const endGame = useCallback(() => {
    alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
    window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, score]);
  /*
   * 정답을 맞췄을때 실행될 함수
   */
  const handleCorrect = () => {
    setStage(stage + 1);
    setTime((intervalRef.current = initVal.time));
    setScore(score + 1);
  };

  /*
   * 오답을 눌렀을때 실행될 함수
   */
  const handleWrong = () => {
    setTime((intervalRef.current -= 1));
    if (intervalRef.current === 0) {
      endGame();
      return;
    }
  };

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setTime((intervalRef.current -= 1));
      if (intervalRef.current === 0) {
        endGame();
        return;
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endGame]);
  return (
    <Container>
      <ScoreBoard>
        스테이지:{stage}, 남은시간:{intervalRef.current}, 점수: {score}
      </ScoreBoard>
      <Game handleCorrect={handleCorrect} handleWrong={handleWrong} NUMBER={stage + 1} stage={stage} />
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
