import * as React from 'react';
import { Layout, Form, Input, MenuProps } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;

const items1: MenuProps['items'] = ['체크', '2', '3'].map((key) => ({
  key,
  label: key,
}));

export const AppLayout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Form>
          <Form.Item>{/* <Input /> */}</Form.Item>
        </Form>
      </Header>
      <Main>{children}</Main>
    </Layout>
  );
};

const Main = styled.main`
  padding: 10px;
  & > .championSections {
    margin: 10px;
    display: flex;
    align-items: center;
    span {
      text-align: center;
      width: 100px;
    }
    img {
      margin-right: 10px;
      width: 120px;
      height: 120px;
      :hover {
        cursor: pointer;
        filter: blur(3px);
      }
    }
  }
`;
