import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

const Tag = () => {
  const [text, setText] = useState('');
  const listRef = useRef();
  const [child, setChild] = useState([]);
  // const
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setText('');
      // console.log(AppendListItem(e.target.value));
      // child.concat(AppendListItem(e.target.value));
      listRef.current.append(AppendListItem(e.target.value));
    }
  };
  const AppendListItem = (content) => {
    return (
      <TagListItem>
        <TagListItemTitle>{content}</TagListItemTitle>
        <TagListCloseBtn>X</TagListCloseBtn>
      </TagListItem>
    );
  };
  return (
    <Container>
      <Title>Tag</Title>
      <TagContainer>
        <TagInputContainer>
          <TagList ref={listRef}></TagList>
          <TagInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Press enter to add tags"
          />
        </TagInputContainer>
      </TagContainer>
    </Container>
  );
};

export default Tag;

const Container = styled.div``;
const Title = styled.p`
  font-family: 'Roboto Mono', monospace;
`;
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
const TagInputContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  width: 80%;
  display: flex;
  vertical-align: middle;
`;
const TagList = styled.ul`
  display: flex;
`;
const TagListItem = styled.li`
  background-color: #4900ce;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const TagListItemTitle = styled.span`
  color: white;
  font-weight: 500;
  font-size: 14px;
`;
const TagListCloseBtn = styled.span`
  margin-left: 10px;
  padding: 3px;
  font-size: 12px;
  color: #4900ce;
  background-color: white;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;
const TagInput = styled.input`
  font-size: 14px;
  outline: none;
  border: none;
  width: auto;
`;
