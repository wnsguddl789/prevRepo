import styled from "@emotion/styled";

export const ModalOverlay = styled.div<{visible:boolean}>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`
export const ModalWrapper = styled.div<{
  visible:boolean,
  onClick:Function,
  tabIndex: string
  }>`
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
`


export const ModalInner = styled.div<{
  width:number
}>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width ? `${props.width}px` : "360px"};
  max-width: ${(props) => props.width ? `${props.width+120}px` : "480px"};
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 0;
`
export const ModalHeader = styled.div`
  font-size:20px;
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 20px 20px 20px;
`
export const ModalContent = styled.div`
  padding: 20px;
`
export const ModalButtonContainer = styled.div`
  display:flex;
  transform: translateY(50%);
  width:100%;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px 20px;
`
export const ModalButton = styled.button<{isSubmit:boolean}>`
  box-sizing: border-box;
  width: 50%;
  max-width: 150px;
  border:none;
  margin: 0 10px;
  /* border-radius:15px; */
  background-color: ${(props) => (props.isSubmit ? "rgba(0, 0, 0, 0.6)" : "red")};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  :hover{
    cursor:pointer;
  }
`