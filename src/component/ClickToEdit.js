import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const cache = {
    name: '홍길동',
    age: 18,
  };
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <Container>
      <Title>ClickToEdit</Title>
      <ClickToEditContainer>
        <InputContainer>
          <Label htmlFor="input_name">이름</Label>
          <MyInput id={'input_name'} type={'text'} value={name} handleValueChange={(newValue) => setName(newValue)} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="input_age">나이</Label>
          <MyInput id={'input_age'} type={'number'} value={age} handleValueChange={(newValue) => setAge(newValue)} />
        </InputContainer>
        <InputContainer>
          <Result>
            이름 {name} 나이 {age}
          </Result>
        </InputContainer>
      </ClickToEditContainer>
    </Container>
  );
};
const MyInput = ({ type, value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [editable, setEditable] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (editable) {
      inputEl.current.focus();
    }
  }, [editable]);
  useEffect(() => {
    setNewValue(value);
  }, [value]);
  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {editable ? (
        <InputEdit type={type} value={newValue} ref={inputEl} onBlur={handleBlur} onChange={handleInputChange} />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </InputBox>
  );
};
export default ClickToEdit;

const Container = styled.div``;
const Title = styled.p``;
const ClickToEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
const InputContainer = styled.div`
  /* margin-bottom: 50px; */
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;
`;
const Label = styled.label`
  padding: 20px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  margin-left: 1rem;
`;
const InputEdit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
`;
const Result = styled.span``;
