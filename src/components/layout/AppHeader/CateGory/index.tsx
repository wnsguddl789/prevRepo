import React from 'react';
import styled from '@emotion/styled';

const Category = () => {
  return (
    <CateGoryContainer>
      <CateGoryListWrapper>
        <CateGoryList>전체상품</CateGoryList>
        <CateGoryList>Top30</CateGoryList>
        <CateGoryList>인기상품</CateGoryList>
        <CateGoryList>전체상품</CateGoryList>
        <CateGoryList>전체상품</CateGoryList>
        <CateGoryList>전체상품</CateGoryList>
        <CateGoryList>더보기</CateGoryList>
      </CateGoryListWrapper>
    </CateGoryContainer>
  );
};

export default Category;

const CateGoryContainer = styled.div`
  width: 100%;
  height: 10vh;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
`;

const CateGoryListWrapper = styled.ul`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
const CateGoryList = styled.li`
  margin: 10px 40px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  :hover {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }
`;
