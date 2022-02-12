import React from 'react';
import styled from '@emotion/styled';

interface PropsTypes {
  text: string;
  color: string;
}

const Message = ({ text, color }: PropsTypes) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

export default Message;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.span`
  color: ${(props) => props.color};
`;
