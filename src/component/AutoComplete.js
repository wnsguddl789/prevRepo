import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const AutoComplte = () => {
  const dataList = ['antique', 'vintage', 'refurbunished', 'rustric'];
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const listRef = useRef();
  useEffect(() => {
    if (text === '') {
      setIsOpen(false);
    }
  }, [text]);
  const handleClearInput = () => {
    setText('');
    setIsOpen(false);
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    const visible = [];
    if (listRef) {
      [...listRef.current.children].map((list) => {
        const listText = list.innerText;

        if (listText.includes(text)) {
          if (text !== '') {
            list.setAttribute('style', 'display:block;');
            visible.push(true);
          }
        } else {
          list.setAttribute('style', 'display:none;');
          visible.push(false);
        }
      });
      if (visible.includes(true)) {
        setIsOpen(true);
      } else if (!visible.includes(true)) {
        setIsOpen(false);
      }
    }
  }, [listRef, text]);

  return (
    <Container>
      <Title>AutoComplte</Title>
      <TagContainer>
        <InputContainer isOpen={isOpen}>
          <Input type="text" value={text} onChange={(e) => handleChangeInput(e)} />
          <DeleteBTN onClick={handleClearInput}>X</DeleteBTN>
        </InputContainer>
        <DropDownContainer isOpen={isOpen} ref={listRef}>
          {dataList.map((data, idx) => {
            return (
              <DropDownList key={idx} onClick={() => (setText(data), setIsOpen(false))}>
                {data}
              </DropDownList>
            );
          })}
        </DropDownContainer>
      </TagContainer>
    </Container>
  );
};
export default AutoComplte;

const Container = styled.div``;
const Title = styled.p``;
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
const InputContainer = styled.div`
  border-radius: ${(props) => (props.isOpen ? '20px 20px 0 0' : '20px')};
  border: 1px solid #e0e0e0;
  padding: 10px;
  box-shadow: ${(props) => (props.isOpen ? null : '0 3px 3px #e0e0e0')};
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
const DeleteBTN = styled.span`
  margin: 3px 10px 0 0;
  :hover {
    cursor: pointer;
  }
`;
const DropDownContainer = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  border-radius: 0 0 20px 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 3px 3px #e0e0e0;
  overflow-x: hidden;
`;
const DropDownList = styled.li`
  padding: 10px;
  :hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;
