import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { imagesURL } from '../../constant/imagesURL';
const TOTAL_SLIDES = imagesURL.length - 1;
const CarouSel = ({ theme }) => {
  console.log(theme);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <>
      <Container>
        <BTN onClick={PrevSlide} isPREV={true}>
          <GrPrevious />
        </BTN>
        <BTN onClick={NextSlide} isPREV={false}>
          <GrNext />
        </BTN>
        <CarouSelContainer ref={slideRef}>
          {imagesURL.map((list, index) => {
            return <Slide key={index} url={list.url} header={list.header} content={list.content} />;
          })}
        </CarouSelContainer>
      </Container>
    </>
  );
};

export default CarouSel;

const Container = styled.div`
  width: 100%;
  padding-top: 25px;
  overflow: hidden;
  position: absolute;
  display: block;
`;
const CarouSelContainer = styled.div`
  height: 300px;
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
`;
const BTN = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  top: 50%;
  left: ${(props) => (props.isPREV ? '10px' : null)};
  right: ${(props) => (props.isPREV ? null : '10px')};
  z-index: 99;
`;
