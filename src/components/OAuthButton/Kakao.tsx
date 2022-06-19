import React from 'react';
import { ButtonContainer, OAuthButtonProps } from './';

export const KakaoOAuthButton: React.FunctionComponent<OAuthButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer color="#FEE500" onClick={onClick}>
      <svg id="kakao" xmlns="http://www.w3.org/2000/svg" viewBox="-75 -90 350 350">
        <polygon className="kakao logo" fill="#3c1e1e" points="45 140 40 185 90 150 45 140" />
        <ellipse className="kakao logo" fill="#3c1e1e" cx="100" cy="80" rx="100" ry="80" />
      </svg>
      <span className="title">Login with Kakao</span>
    </ButtonContainer>
  );
};
