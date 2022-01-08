import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const imagesURL = [
  { url: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1451/725c6862.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1453/7a978579.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg', header: 'ddd ', content: 'dds' },
  { url: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg', header: 'ddd ', content: 'dds' },
];
const TOTAL_SLIDES = imagesURL.length;
const CarouSel = () => {
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
          PREV
        </BTN>
        <BTN onClick={NextSlide} isPREV={false}>
          NEXT
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
  padding-top: 25px;
  overflow: hidden;
`;
const CarouSelContainer = styled.div`
  height: 300px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
`;
const BTN = styled.button`
  position: absolute;
  top: 20%;
  left: ${(props) => (props.isPREV ? 0 : null)};
  right: ${(props) => (props.isPREV ? null : 0)};
  z-index: 99;
`;
