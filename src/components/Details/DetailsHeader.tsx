import Link from 'next/link';
import styled from '@emotion/styled';
import { useState } from 'react';

export const DetailsHeader = () => {
  return (
    <Header>
      <DetailMenu>
        <Link href="#">
          <a>
            <DetailMenuItem>상세정보</DetailMenuItem>
          </a>
        </Link>
        <Link href="#">
          <a>
            <DetailMenuItem>리뷰</DetailMenuItem>
          </a>
        </Link>
        <Link href="#">
          <a>
            <DetailMenuItem>Q & A</DetailMenuItem>
          </a>
        </Link>
        <Link href="#">
          <a>
            <DetailMenuItem>반품 / 교환</DetailMenuItem>
          </a>
        </Link>
      </DetailMenu>
    </Header>
  );
};

const Header = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;
const DetailMenu = styled.ul`
  display: flex;
  justify-content: center;
`;
const DetailMenuItem = styled.li`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  padding: 20px 90px;
  color: rgb(134, 142, 150);
  :hover {
    color: #222222;
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 18%;
    width: 70%;
    height: 1px;
    border-bottom: 2px solid rgb(233, 236, 239);
  }
  :hover::after {
    border-bottom: 2px solid #222222;
  }
  .menu-on {
    color: rgb(18, 184, 134);
  }
`;
