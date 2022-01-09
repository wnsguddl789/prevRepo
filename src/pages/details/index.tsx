import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { DetailsHeader } from '../../components/Details/DetailsHeader';

const DetailsIndexPage: NextPage = () => {
  return (
    <Container>
      <article>
        <h2 className="sr-only">하트링 상세 페이지</h2>
        <img
          src="https://cdn.pixabay.com/photo/2015/11/14/14/42/heart-1043245_960_720.jpg"
          alt=""
        />
        <div>skldfjslkdfjsdlkf</div>
      </article>
      <DetailsHeader />
      <h2 className="sr-only">상세 페이지</h2>
    </Container>
  );
};
// rgba(0,0,0,0.5);
export default DetailsIndexPage;

const Container = styled.section`
  padding: 0 150px;
`;
