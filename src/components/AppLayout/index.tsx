import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Select from '../Select';
import { languageApi } from '../../pages/api';

const AppLayout: React.FC = ({ children }) => {
  const pathname = useRouter().pathname;
  const [currnet, setCurrent] = useState('');
  const [error, setError] = useState('');
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchLanugage = async () => {
      let language = null;
      try {
        ({ data: language } = await languageApi.setLanguage());
        setLanguage(language);
      } catch (err) {
        setError("Can't find language.");
      }
    };
    fetchLanugage();
  }, []);
  return (
    <>
      <Header>
        <List>
          <Logo isCurrent={currnet === '/' ? true : false}>
            <SLink href={'/'}>NOMFLIX</SLink>
          </Logo>
          <Item isCurrent={currnet === '/Movie' ? true : false}>
            <SLink href={'/Movie'}>Movies</SLink>
          </Item>
          <Item isCurrent={currnet === '/Tv' ? true : false}>
            <SLink href={'/Tv'}>TV</SLink>
          </Item>
          <Item isCurrent={currnet === '/Search' ? true : false}>
            <SLink href={'/Search'}>Search</SLink>
          </Item>
        </List>
        <List>
          <Item isCurrent={false}>
            <Select handleLanguage={handleLanguage} datas={language} />
          </Item>
        </List>
      </Header>
      <Main>{children}</Main>
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
  justify-content: space-between;
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
  max-width: 400px;
  min-width: 80px;
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
const Main = styled.main`
  height: calc(100vh - 100px);
`;
const Logo = styled.li<{
  isCurrent: boolean;
}>`
  font-size: 24px;
  font-weight: 800;
  color: red;
  width: 200px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
