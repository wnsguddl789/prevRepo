import React from 'react';
import styled from 'styled-components';

const Tag = () => {
  return (
    <Container>
      <Title>Tag</Title>
      <TagContainer></TagContainer>
    </Container>
  );
};

export default Tag;

const Container = styled.div``;
const Title = styled.p``;
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
