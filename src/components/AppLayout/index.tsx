import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AppLayout: React.FC = ({ children }) => {
  const pathname = useRouter().pathname;
  const [currnet, setCurrent] = useState('');
  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);
  return (
    <>
      <Header>
        <List>
          <Item isCurrent={currnet === '/' ? true : false}>
            <SLink href={'/'}>Movies</SLink>
          </Item>
          <Item isCurrent={currnet === '/Tv' ? true : false}>
            <SLink href={'/Tv'}>TV</SLink>
          </Item>
          <Item isCurrent={currnet === '/Search' ? true : false}>
            <SLink href={'/Search'}>Search</SLink>
          </Item>
        </List>
      </Header>
      <main>{children}</main>
    </>
  );
};
export default AppLayout;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li<{
  isCurrent: boolean;
}>`
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.isCurrent ? '4px solid #3498db' : null)};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
