import * as React from 'react';
import { Layout, Form, Input, MenuProps } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;

export const AppLayout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <span style={{ color: 'white' }}>우리 한길이를 위한 웹앱이랄까?</span>
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
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
        filter: blur(3px);
      }
    }
  }
  .playCount {
    .howManyPlay {
      font-weight: 700;
    }
  }
`;
