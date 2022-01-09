import React, { ReactNode } from 'react'
import {
  ModalOverlay,
  ModalWrapper,
  ModalHeader,
  ModalInner,
  ModalContent,
  ModalButtonContainer,
  ModalButton
} from './style'
interface ModalProps {
  ModalTitle: string,
  onClose: Function,
  width: number,
  closable: boolean,
  maskClosable: boolean,
  visible: boolean,
  children: ReactNode
}
/*
* 모달 컴포넌트 가이드
* <Modal
*   ModalTitle={"로그인"}     -> string
*   width={360}             -> number
*   visible={modalVisible}  -> boolean
*   closable={true}         -> boolean
*   maskClosable={true}     -> boolean
*   onClose={closeModal}    -> Function
* >
* </Modal>
*/

const Modal = ({ 
  ModalTitle,
  width,
  visible,
  closable,
  maskClosable,
  onClose,
  children,
 }:ModalProps) => {
  const onMaskClick = (e:React.SyntheticEvent<EventTarget>) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e:React.SyntheticEvent<EventTarget>) => {
    if (onClose) {
      onClose(e)
    }
  }
  const Submit = (e:React.SyntheticEvent<EventTarget>) => {
    alert('저장하겠습니까?')
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper 
      onClick={maskClosable ? onMaskClick : null}
      tabIndex="-1"
      visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner" width={width}>
          <ModalHeader>{ModalTitle}</ModalHeader>
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
          <ModalContent>{children}</ModalContent>
          <ModalButtonContainer>
            <ModalButton isSubmit={true} onClick={Submit}>저장</ModalButton>
            <ModalButton isSubmit={false} onClick={close}>취소</ModalButton>
          </ModalButtonContainer> 
        </ModalInner>
        
        
      </ModalWrapper>
    </>
  )
}

export default Modal