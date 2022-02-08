import React from 'react';
import styled from '@emotion/styled';

interface PropsType {
  title: string;
  children: React.ReactNode;
}

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
  align-items: center;
`;

const Section = ({ title, children }: PropsType) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
