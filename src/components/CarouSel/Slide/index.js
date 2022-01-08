import React from 'react';
import styled from 'styled-components';

const Slide = ({ url, header, content }) => {
  return (
    <SlideConatiner>
      <IMG src={url} />
      <GuideWrapper>
        <GuddeHeader>{header}</GuddeHeader>
        <GuddeHeader>{content}</GuddeHeader>
      </GuideWrapper>
    </SlideConatiner>
  );
};
const SlideConatiner = styled.div`
  width: 100%;
`;
const IMG = styled.img`
  border-radius: 5px;
`;
const GuideWrapper = styled.div``;
const GuddeHeader = styled.p``;
export default Slide;
