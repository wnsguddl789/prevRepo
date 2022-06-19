import React from 'react';
import { ButtonContainer, OAuthButtonProps } from './';

export const GithubOAuthButton: React.FunctionComponent<OAuthButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer color={'rgb(51, 51, 51);'} title={'#ffffff'} onClick={onClick}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="120 90 64 64">
        <path
          fill="#ffffff"
          d="M152.61,107.44a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67a5.85,5.85,0,0,1,.16,4.31,6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78a16.29,16.29,0,0,0-5.16-31.74Z"
        />
      </svg>
      <span className="title">Login with Github</span>
    </ButtonContainer>
  );
};
