import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    if (listRef) {
      // eslint-disable-next-line array-callback-return
      [...listRef.current.children].map((child) => {
        const tabIndex = Number(child.getAttribute('tabindex'));
        if (currentTab === tabIndex) {
          child.setAttribute(
            `style`,
            `
            background-color:#4900ce; 
            color:white;
            transition :all 0.2s ease-in-out;
          `
          );
        } else {
          child.setAttribute(
            `style`,
            `
            background-color:#e0e0e0;
            color:gray;
            transition :all 0.2s ease-in-out;
          `
          );
        }
      });
    }
  }, [currentTab]);
  return (
    <Container>
      <Title>Tab</Title>
      <TabContainer>
        <TabList ref={listRef}>
          <TabListItem tabIndex={999}></TabListItem>
          <TabListItem tabIndex={0} onClick={() => setCurrentTab(0)}>
            Tab1
          </TabListItem>
          <TabListItem tabIndex={1} onClick={() => setCurrentTab(1)}>
            Tab2
          </TabListItem>
          <TabListItem tabIndex={2} onClick={() => setCurrentTab(2)}>
            Tab3
          </TabListItem>
        </TabList>
        <TabResult>Tab menu {currentTab === 0 ? 'ONE' : currentTab === 1 ? 'TWO' : 'THREE'}</TabResult>
      </TabContainer>
    </Container>
  );
};

export default Tab;
const Container = styled.div``;
const Title = styled.p``;
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
const TabList = styled.ul`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr;
  :hover {
    cursor: pointer;
  }
`;
const TabListItem = styled.li`
  padding: 20px;
`;
const TabResult = styled.span`
  font-size: 12px;
  margin: 50px auto;
`;
