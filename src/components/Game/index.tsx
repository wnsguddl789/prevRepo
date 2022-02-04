import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/index';
interface GameProps {
  score: number;
  stage: number;
  NUMBER: number;
  handleCorrect: Function;
  handleWrong: Function;
}
const Game = ({ score, NUMBER, stage, handleCorrect, handleWrong }: GameProps) => {
  // N = stage + 1 -> N X N 크기의 배열생성
  const [array, setArray] = useState(Array.from(Array(NUMBER * NUMBER).keys()));
  // 0 ~ stage 까지의 랜덤상수 생성
  const [randomInt, setRandomInt] = useState(Math.floor(Math.random() * (stage - 0)) + 0);
  const [colorCode, setColorCode] = useState([
    `#${Math.round(Math.random() * 0xffffff).toString(16)}`,
    `#${Math.round(Math.random() * 0xffffff).toString(16)}`,
  ]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      let repeat = Array(NUMBER + 1).join('1fr ');
      ref.current.setAttribute('style', `grid-template-columns : ${repeat}`);
      [...ref.current.children].map((child) => {
        // console.log(child);
      });
    }
    // console.log(array);
  }, [ref, stage]);
  const Correct = () => {
    setArray(Array.from(Array((NUMBER + 1) * (NUMBER + 1)).keys()));
    setRandomInt(Math.floor(Math.random() * (NUMBER - 0)) + 0);
    setColorCode([`#${Math.round(Math.random() * 0xffffff).toString(16)}`, `#${Math.round(Math.random() * 0xffffff).toString(16)}`]);
    handleCorrect();
  };
  return (
    <Container ref={ref}>
      {array &&
        array.map((list, idx) => {
          if (idx === randomInt) {
            return <Card key={idx} index={String(stage)} isCorrect={true} onClick={() => Correct()} />;
          } else {
            return <Card key={idx} index={String(stage)} isCorrect={false} onClick={() => handleWrong()} />;
          }
        })}
    </Container>
  );
};
export default Game;
const Container = styled.div`
  display: grid;
  width: 500px;
  height: 500px;
`;
const Card = styled.div<{
  isCorrect: boolean;
  index: any;
}>`
  background-color: ${(props) => (props.isCorrect ? COLOR[props.index].originColor : COLOR[props.index].diffColor)};
  margin: 1px;
`;
