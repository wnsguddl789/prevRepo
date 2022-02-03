import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface GameProps {
  score: number;
  stage: number;
  handleClickEvent: Function;
}

const Game = ({ score, stage, handleClickEvent }: GameProps) => {
  const [array, setArray] = useState(Array.from(Array(stage * stage).keys()));
  const [randomInt, setRandomInt] = useState(Math.floor(Math.random() * (stage - 0)) + 0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const repeat = Array(stage + 1).join('1fr ');
      ref.current.setAttribute('style', `grid-template-columns : ${repeat}`);
      [...ref.current.children].map((child) => {
        if (randomInt === Number(child.getAttribute('data-index'))) {
          child.setAttribute('isCorrect', 'true');
        } else {
          child.setAttribute('isCorrect', 'false');
        }
        console.log(child);
      });
    }
  });
  return (
    <Container ref={ref}>
      {array &&
        array.map((list, idx) => {
          return <Card key={idx} data-index={idx} />;
        })}
    </Container>
  );
};
export default Game;
const Container = styled.div`
  display: grid;
  width: 360px;
  height: 360px;
`;
const Card = styled.div`
  background-color: red;
  margin: 1px;
`;
