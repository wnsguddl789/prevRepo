import styled from 'styled-components';

export const MainContainer = styled.div`
  padding-top: 15px;
`;
export const SlideContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: block;
`;
export const Slide = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  user-select: none;
  -webkit-user-drag: none;
  @media (min-width: 1200px) {
    left: calc(50% - 535px);
  }
  @media (max-width: 1199px) {
    left: calc(50% - calc(100vw - 70px) / 2);
  }
  @media (max-width: 700px) {
    left: calc(50% - calc(100vw - 45px) / 2);
  }
  @media (max-width: 400px) {
    left: calc(50% - calc(100vw - 30px) / 2);
  }
`;
export const SlideListContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: inline-block;
  border-radius: 4px;
  overflow: hidden;
  @media (min-width: 1200px) {
    min-width: 1060px;
  }
  @media (max-width: 1199px) {
    min-width: 90%;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  position: relative;
  margin: 0 10px;
  -webkit-user-drag: none;
  border-radius: 4px;
  @media (min-width: 1200px) {
    min-width: 1060px;
  }
  @media (max-width: 1199px) {
    min-width: calc(100vw - 100px);
    height: 183px;
  }
`;
export const InfoContainer = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
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
export const InfoHeader = styled.h2`
  margin-top: 20px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.5;
    margin: 20px 0 0 20px;
  }
`;
export const InfoBody = styled.h3`
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
export const InfoDivider = styled.hr`
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const InfoRedirect = styled.a`
  margin: 6px 0 0 20px; 
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  :hover {
    cursor: pointer;
  }
`;
export const BTN = styled.button`
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
    z-index: 9999;
  }
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const BTNEndIcon = styled.span`
  margin-top: 2px;
  margin-right: -1px;
  margin-left: 2px;
`;

export const EndIconSvg = styled.svg`
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

export const BtnSvg = styled.svg`
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
