import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  border-radius: 12px;
  height: 90px;
  padding: 0px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  border: 1px solid ${(props) => (props.color ? props.color : 'rgba(0,0,0,0.2)')};
  cursor: pointer;
  & > svg {
    height: 36px;
  }
  span.title {
    line-height: 50px;
    width: 200px;
    text-align: center;
    font-size: 20px;
    color: ${(props) => props.title};
  }
  margin: 10px 0;
`;

export interface OAuthButtonProps {
  onClick: () => void;
}
