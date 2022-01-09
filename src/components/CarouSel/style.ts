import styled from '@emotion/styled';
import Image from 'next/image';
export const CarouSelContainer = styled.div`
  /* position: relative; */
  height: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const EmblaViewport = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
export const EmblaContainer = styled.div`
  display: flex;
  height: 100%;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
`;
export const EmblaSlide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  padding-left: 10px;
`;
export const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 190px;
`;
export const EmblaSlideImg = styled(Image)`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
`;
export const EmblaButton = styled.button<{ next: boolean }>`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
  right: ${(props) => (props.next ? '27px' : null)};
  left: ${(props) => (props.next ? null : '27px')};
`;
export const EmblaButtonSVG = styled.svg`
  width: 100%;
  height: 100%;
`;
