import React from 'react';
import { ButtonContainer, OAuthButtonProps } from './';

export const GoogleOAuthButton: React.FunctionComponent<OAuthButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer title={'rgba(0,0,0,0.6)'} onClick={onClick}>
      <svg id="google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
        <path
          className="logo"
          fill="#4285f4"
          d="M26.64,18.2a10.34,10.34,0,0,0-.16-1.84H18v3.48h4.84A4.14,4.14,0,0,1,21,22.56v2.26H24a8.78,8.78,0,0,0,2.68-6.62Z"
        />
        <path
          className="bottom logo"
          fill="#34a853"
          d="M18,27a8.59,8.59,0,0,0,6-2.18L21,22.56A5.43,5.43,0,0,1,13,19.71H10V22a9,9,0,0,0,8,5Z"
        />
        <path className="left logo" fill="#fbbc05" d="M13,19.71a5.32,5.32,0,0,1,0-3.42V14H10A9,9,0,0,0,10,22l3-2.33Z" />
        <path
          className="top logo"
          fill="#ea4335"
          d="M18,12.58a4.86,4.86,0,0,1,3.44,1.35L24,11.34A8.65,8.65,0,0,0,18,9a9,9,0,0,0-8,5l3,2.33a5.36,5.36,0,0,1,5-3.71Z"
        />
      </svg>
      <span className="title" color={'#ffffff'}>
        Sign in with Google
      </span>
    </ButtonContainer>
  );
};
