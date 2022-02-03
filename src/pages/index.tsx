import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Game from '../components/Game';
const initVal = {
  stage: 3,
  time: 15,
  score: 0,
};
const Home: NextPage = () => {
  const [stage, setStage] = useState(initVal.stage);
  const [time, setTime] = useState(initVal.time);
  const [score, setScore] = useState(initVal.score);
  useEffect(() => {
    // let intervalId: NodeJS.Timeout;
    // intervalId = setInterval(() => {
    //   setTime(time - 1);
    // }, 1000);
    if (time === 0) {
      setStage(initVal.stage);
      setTime(initVal.time);
      setScore(initVal.score);
      // handleClickEvent();
    }
    // if (time === 0) {
    //   var result = confirm(`스테이지:${stage}, 남은시간:${time}, 점수: ${score}`);
    //   if (result) {
    //     alert('게임종료');
    //     // location.reload();
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClickEvent = () => {
    setStage(stage + 1);
    setTime(initVal.time);
    setScore(score + 1);
  };
  return (
    <Container>
      <ScoreBoard>
        스테이지:{stage}, 남은시간:{time}, 점수: {score}
      </ScoreBoard>
      <Game handleClickEvent={handleClickEvent} stage={stage + 1} score={score} />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
const ScoreBoard = styled.div``;
