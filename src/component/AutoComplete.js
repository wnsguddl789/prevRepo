import React from 'react';
import styled from 'styled-components';
const AutoComplte = () => {
  return (
    <Container>
      <Title>AutoComplte</Title>
      <TagContainer></TagContainer>
    </Container>
  );
};

export default AutoComplte;

const Container = styled.div``;
const Title = styled.p``;
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
