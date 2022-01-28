import React, { useState } from 'react';
import styled from 'styled-components';
import '../style/Toggle.css';
const Toggle = () => {
  const [isCheckd, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked(!isCheckd);
  };
  return (
    <Container>
      <Title>Toggle</Title>
      <ToggleContainer>
        <input className="switch-checkbox" id={`switch-new`} type="checkbox" onChange={handleSwitch} />
        <label className="switch-label" htmlFor={`switch-new`} style={{ background: isCheckd && '#4900ce' }}>
          <span className={`switch-button`} />
        </label>
        <span className="switch-result">Toggle Switch {isCheckd ? 'ON' : 'OFF'}</span>
      </ToggleContainer>
    </Container>
  );
};

export default Toggle;
const Container = styled.div``;
const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
`;
