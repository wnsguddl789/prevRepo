import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplte from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import styled from 'styled-components';
const App = () => {
  return (
    <AppContainer>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplte />
      <ClickToEdit />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
