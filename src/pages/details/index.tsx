import type { NextPage } from 'next';
import styled from '@emotion/styled';

const DetailsIndexPage: NextPage = () => {
  return (
    <section>
      <h2 className="sr-only">상세 페이지</h2>
      <header>
        <ul>
          <li>홈</li>
          <li>반지</li>
          <li>미스링</li>
          <li>물고기 반지</li>
        </ul>
      </header>
    </section>
  );
};
// rgba(0,0,0,0.5);
export default DetailsIndexPage;
