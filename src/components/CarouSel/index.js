import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { imagesURL } from '../../constant/imagesURL';
const TOTAL_SLIDES = imagesURL.length - 1;
const CarouSel = ({ theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();
  // const imageRef = useRef();
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
  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translate3d(-${currentSlide}00%,0px)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  //   // imageRef.current.style.filter = `brightness(50%);`;
  // }, [currentSlide]);
  return (
    <MainContainer>
      <SlideContainer>
        <Slide>
          {imagesURL.map((list, index) => {
            return (
              <ImageContainer key={index} ref={slideRef}>
                <Image src={list.url} />
                <InfoContainer>
                  <InfoHeader>{list.header}</InfoHeader>
                  <InfoBody>{list.body}</InfoBody>
                  <InfoDivider />
                  <InfoRedirect>
                    바로가기
                    <BTNEndIcon>
                      <EndIconSvg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </EndIconSvg>
                    </BTNEndIcon>
                  </InfoRedirect>
                </InfoContainer>
              </ImageContainer>
            );
          })}
        </Slide>
      </SlideContainer>
      <BTN onClick={PrevSlide}>Prev</BTN>
      <BTN onClick={NextSlide}>Next</BTN>
    </MainContainer>
  );
};

export default CarouSel;
const MainContainer = styled.div`
  padding-top: 15px;
`;
const SlideContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  overflow: hidden;
  position: relative;
  user-select: none;
`;
const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  transition: all 1s ease-in-out;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
  @media (max-width: 1199px) {
    width: 90%;
  }
`;
const Image = styled.img`
  object-fit: cover;
  position: relative;
  border-radius: 4px;
  @media (min-width: 1200px) {
    width: 1060px;
    z-index: 1000;
    padding: 0 10px;
  }
  @media (max-width: 1199px) {
    width: calc(100vw - 100px);
    height: 183px;
    margin: 20px 10px;
  }
`;
const InfoContainer = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    opacity: 0;
    text-align: left;
    left: 34px;
    z-index: 10000;
  }
  @media (max-width: 1199px) {
    text-align: center;
    width: calc(100vw - 100px);
    height: 183px;
  }
`;
const InfoHeader = styled.h2`
  margin-top: 20px px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: 'auto';
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`;
const InfoBody = styled.h3`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (min-width: 1200px) {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`;
const InfoDivider = styled.hr`
  @media (max-width: 1199px) {
    display: none;
  }
`;
const InfoRedirect = styled.a`
  /* margin: 6px 0 0 13px; */
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
`;
const BTN = styled.button`
  @media (min-width: 1200px) {
  }
  @media (max-width: 1199px) {
    display: none;
  }
`;
const BTNEndIcon = styled.span`
  margin-top: -2px;
  margin-right: -1px;
  margin-left: 2px;
`;

const EndIconSvg = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: inherit;
`;
