import Toggle from './component/Toggle';
import Modal from './component/Modal';
import styled from 'styled-components';
const App = () => {
  return (
    <AppContainer>
      <Toggle />
      <Modal />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
