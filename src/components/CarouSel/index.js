import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { imagesURL } from '../../constant/imagesURL';
import useInterval from '../../hooks/useInterval';
const TOTAL_SLIDES = imagesURL.length - 1;
const CarouSel = ({ theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();
  const imageRef = useRef();
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
  // const DragHandler = (e) => {};

  useInterval(() => {
    setTimeout(NextSlide);
  }, 4000);
  useEffect(() => {
    console.log(currentSlide);
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    // imageRef.current.style.filter = `brightness(50%);`;
  }, [currentSlide]);
  return (
    <MainContainer>
      <SlideContainer>
        <Slide ref={slideRef}>
          {imagesURL.map((list, index) => {
            return (
              <ImageContainer key={index}>
                <Image src={list.url} ref={imageRef} number={index} />
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
        <BTN onClick={PrevSlide} isPREV={true}>
          <BtnSvg viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </BtnSvg>
        </BTN>
        <BTN onClick={NextSlide} isPREV={false}>
          <BtnSvg viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </BtnSvg>
        </BTN>
      </SlideContainer>
    </MainContainer>
  );
};

export default CarouSel;
const MainContainer = styled.div`
  padding-top: 15px;
`;
const SlideContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: block;
  text-align: center;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  user-select: none;
`;
const ImageContainer = styled.div`
  position: relative;
  min-width: 100%;
  margin: 0 auto;
  overflow: hidden;
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
    padding: 0 10px;
  }
  @media (max-width: 1199px) {
    width: calc(100vw - 100px);
    height: 183px;
    margin: 20px 10px;
  }
`;
const InfoContainer = styled.div`
  position: relative;
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
  }
  @media (max-width: 1199px) {
    text-align: center;
    width: calc(100vw - 100px);
    height: 183px;
    margin: auto;
  }
`;
const InfoHeader = styled.h2`
  margin-top: 20px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  width: auto;
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
    justify-content: center;
    position: absolute;
    top: 120px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    left: ${(props) => (props.isPREV ? 'calc((100% - 1210px) / 2)' : null)};
    right: ${(props) => (props.isPREV ? null : 'calc((100% - 1210px) / 2)')};
    /* z-index: 99; */
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

const BtnSvg = styled.svg`
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
