import React, { useState } from 'react';
import styled from 'styled-components';

const Tag = () => {
  const initialTags = ['CodeStates', 'kimcoding'];
  const [tags, setTags] = useState(initialTags);

  const addTags = (e) => {
    let value = e.target.value.trim();

    if (e.key === 'Enter' && !tags.includes(value) && value) {
      setTags([...tags, value]);
      e.target.value = '';
    } else if (e.key === 'Enter' && !value) {
      e.target.value = '';
    }
  };

  const removeTags = (indexTags) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[indexTags];
      })
    );
  };
  return (
    <Container>
      <Title>Tag</Title>
      <TagContainer>
        <TagInputContainer>
          <TagList>
            {tags.map((tag, index) => {
              return (
                <TagListItem key={index}>
                  <TagListItemTitle>{tag}</TagListItemTitle>
                  <TagListCloseBtn onClick={() => removeTags(index)}>X</TagListCloseBtn>
                </TagListItem>
              );
            })}
          </TagList>
          <TagInput onKeyUp={(e) => addTags(e)} placeholder="Press enter to add tags" />
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
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #4000c7;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;
const TagInput = styled.input`
  font-size: 14px;
  outline: none;
  border: none;
  flex: 1;
  /* width: 100%; */
`;
