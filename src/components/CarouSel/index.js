import React, { useState, useRef, useEffect, useCallback } from 'react';
import { imagesURL } from '../../constant/imagesURL';
import useInterval from '../../hooks/useInterval';
import {
  MainContainer,
  SlideContainer,
  Slide,
  SlideListContainer,
  Image,
  InfoContainer,
  InfoHeader,
  InfoBody,
  InfoDivider,
  InfoRedirect,
  BTN,
  BTNEndIcon,
  EndIconSvg,
  BtnSvg,
} from './style';
const CarouSel = ({ theme, autoflow = 4000 }) => {
  const slideRef = useRef();
  const slideListRef = useRef();
  const imageRef = useRef();
  const isDragging = useRef(false);
  const LOOP = 3;
  const MAX_SLIDES = imagesURL.length - LOOP;
  const TOTAL_SLIDES = MAX_SLIDES * LOOP;
  const threeTimesImage = [...imagesURL, ...imagesURL, ...imagesURL];
  const [currentLoopIndex, setCurrentLoopIndex] = useState(imagesURL.length);
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState(0);

  const onMouseDown = useCallback((e) => {
    if (slideRef.current && slideRef.current.contains(e.target)) {
      isDragging.current = true;
    }
  }, []);
  const onMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);
  const onMouseMove = useCallback((e) => {
    if (isDragging.current) {
      setPosition((position) => position + e.movementX);
    }
  }, []);
  const NextSlide = () => {
    if (currentLoopIndex >= TOTAL_SLIDES) {
      setCurrentLoopIndex(0);
    } else {
      setCurrentLoopIndex(currentLoopIndex + 1);
    }
  };
  const PrevSlide = () => {
    if (currentLoopIndex === 0) {
      setCurrentLoopIndex(TOTAL_SLIDES);
    } else {
      setCurrentLoopIndex(currentLoopIndex - 1);
    }
  };
  useInterval(() => {
    NextSlide();
  }, autoflow);
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove, onMouseDown, onMouseUp]);
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentLoopIndex * slideListRef.current.offsetWidth}px)`;
    // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentLoopIndex]);
  useEffect(() => {
    // 중심사진 제외 밝기 50퍼로 만듬
    // eslint-disable-next-line array-callback-return
    [...slideRef.current.children].map((child) => {
      if (currentLoopIndex === parseInt(child.getAttribute('data'))) {
        child.setAttribute('style', 'filter: brightness(100%);');
      } else {
        child.setAttribute('style', 'filter: brightness(50%);');
      }
    });
  });
  return (
    <MainContainer>
      <SlideContainer>
        <Slide onMouseDown={onMouseDown} onMouseUp={onMouseUp} ref={slideRef}>
          {threeTimesImage.map((list, index) => {
            return (
              <SlideListContainer key={index} data={index} ref={slideListRef}>
                <Image src={list.url} data={index} ref={imageRef} />

                <InfoContainer>
                  <InfoHeader>{list.header}</InfoHeader>
                  <InfoBody>{list.body}</InfoBody>
                  <InfoDivider />
                  <InfoRedirect>
                    <span>바로가기</span>
                    <BTNEndIcon>
                      <EndIconSvg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </EndIconSvg>
                    </BTNEndIcon>
                  </InfoRedirect>
                </InfoContainer>
              </SlideListContainer>
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
