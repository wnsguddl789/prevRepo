import React, { useState, useRef, useEffect } from 'react';
import { imagesURL } from '../../constant/imagesURL';

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
  const LOOP = 3;
  const MAX_SLIDES = imagesURL.length - LOOP;
  const TOTAL_SLIDES = MAX_SLIDES * LOOP;
  const threeTimesImage = [...imagesURL, ...imagesURL, ...imagesURL];
  const [currentLoopIndex, setCurrentLoopIndex] = useState(2);
  const [isMouseOn, setIsMouseOn] = useState(true);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

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
  useEffect(() => {
    let interValId;
    if (isMouseOn) {
      // 마우스 올리고있으면 다음슬라이드 못넘기게 하기위해
      interValId = setInterval(() => {
        setCurrentLoopIndex(currentLoopIndex + 1);
      }, autoflow);
    }
    return () => clearTimeout(interValId);
  }, [isMouseOn, currentLoopIndex, autoflow]);
  const onMouseOut = () => {
    setIsMouseOn(true);
  };
  const onMouseOver = () => {
    setIsMouseOn(false);
  };
  const onMouseDown = (e) => {
    setMouseDownClientX(e.clientX);
  };
  const onMouseUp = (e) => {
    setMouseUpClientX(e.clientX);
  };
  useEffect(() => {
    const dragDiffWidth = Math.abs(mouseDownClientX - mouseUpClientX);
    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragDiffWidth > 100) {
        NextSlide();
      } else if (mouseUpClientX > mouseDownClientX && dragDiffWidth > 100) {
        PrevSlide();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseUpClientX, mouseDownClientX]);
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentLoopIndex * slideListRef.current.offsetWidth}px)`;
    // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentLoopIndex]);
  useEffect(() => {
    // 중심사진 제외 밝기 50퍼로 만듬
    // 중심사진 제외 infoContainer 안보이게 처리
    // eslint-disable-next-line array-callback-return
    [...slideRef.current.children].map((child) => {
      if (currentLoopIndex === parseInt(child.getAttribute('data'))) {
        child.setAttribute('style', 'filter: brightness(100%);');
        child.children[1].setAttribute('style', 'display:block;transition :all 0.5s ease-in-out;');
      } else {
        child.setAttribute('style', 'filter: brightness(50%);');
        child.children[1].setAttribute('style', 'display:none;');
      }
    });
  });
  return (
    <MainContainer>
      <SlideContainer onMouseOver={onMouseOver} onMouseOut={onMouseOut} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <Slide ref={slideRef}>
          {threeTimesImage.map((list, index) => {
            return (
              <SlideListContainer key={index} data={index} ref={slideListRef}>
                <Image src={list.url} data={index} />

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
