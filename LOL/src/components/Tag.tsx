import * as React from 'react';
import styled from '@emotion/styled';
export const Tag = ({ onClick }: any) => {
  return <Container onClick={onClick}>삭제</Container>;
};

const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 800;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
`;
