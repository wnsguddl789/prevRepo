import React from 'react';
import styled from 'styled-components';

const Slide = ({ url, header, content }) => {
  return (
    <SlideConatiner>
      <IMG src={url} />
      <GuideWrapper>
        <GuideHeader>{header}</GuideHeader>
        <GuideContent>{content}</GuideContent>
        <GuideLink>바로가기 </GuideLink>
      </GuideWrapper>
    </SlideConatiner>
  );
};
const SlideConatiner = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  padding-left: 10px;
`;
const IMG = styled.img`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  /* min-width: 100%; */
  max-width: none;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;
const GuideWrapper = styled.div`
  position: absolute;

  bottom: 0;
`;
const GuideHeader = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
const GuideContent = styled.p`
  margin: 5px 0 10px 0;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
const GuideLink = styled.p`
  text-align: center;
  font-size: 13px;
  color: #3366ff;
  :hover {
    cursor: pointer;
  }
`;
export default Slide;
