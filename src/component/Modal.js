import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
const Modal = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <Container>
      <Title>Modal</Title>
      <ModalContainer>
        <ModalOpenBTN onClick={handleModal}>Open Modal</ModalOpenBTN>
        <ModalOverlay visible={visible} />
        <ModalWrapper visible={visible}>
          <ModalInner>
            <ModalCloseBTN onClick={handleModal}>X</ModalCloseBTN>
            <ModalContent>HELLO CODESTATES!</ModalContent>
          </ModalInner>
        </ModalWrapper>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
const Container = styled.div``;

const Title = styled.p`
  font-family: 'Roboto Mono', monospace;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
const ModalOpenBTN = styled.button`
  background-color: #4900ce;
  color: white;
  font-size: 14px;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: 45px;
  :hover {
    cursor: pointer;
  }
`;
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalCloseBTN = styled.span`
  margin: 10px 0 0 0;
  :hover {
    cursor: pointer;
  }
`;
const ModalContent = styled.span`
  margin: 40px 0;
`;
